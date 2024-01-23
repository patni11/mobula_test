"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export const TokenSearchType = z.object({
  tokenAddress: z
    .string()
    .refine((value) => /^0x[a-fA-F0-9]{40}$/.test(value), {
      message:
        'Invalid token address. It should start with "0x" and have a valid hexadecimal format.',
    }),
  date_gte: z.date().optional(),
  date_lte: z.date().optional(),
});

type TokenQuery = {
  tokenAddress: string;
  date_gte?: Date;
  date_lte?: Date;
};

function PriceForm() {
  const form = useForm<TokenQuery>({
    resolver: zodResolver(TokenSearchType),
    mode: "onSubmit",
  });

  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [tokenData, setTokenData] = useState<
    {
      date: string;
      volume: string;
      liquidity: string;
      price: string;
    }[]
  >([{ date: "", volume: "", liquidity: "", price: "" }]);

  const handleFormSubmit = async (data: TokenQuery) => {
    setIsLoading(true);
    try {
      // const url = `http://localhost:3000/token/${data.tokenAddress}`;
      let url = `http://localhost:3000/token/${data.tokenAddress}`;

      if (data.date_gte && data.date_lte) {
        const gte = Math.floor(data.date_gte.getTime() / 1000);
        const lte = Math.floor(data.date_lte.getTime() / 1000);
        console.log(gte, lte);
        url = `http://localhost:3000/token/${data.tokenAddress}?date_gte=${gte}&date_lte=${lte}`;
      }

      const response = await fetch(url, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const fetchedData = await response.json();
      console.log(fetchedData);
      const tokenData = fetchedData.data.token;

      setTokenName(tokenData.name);
      setTokenSymbol(tokenData.symbol);

      const updatedTokenDayData = tokenData.tokenDayData.map((data: any) => ({
        date: new Date(data.orderBy * 1000).toLocaleDateString(),
        volume: String(Number(data.dailyVolumeUSD).toFixed(3)),
        liquidity: String(Number(data.totalLiquidityUSD).toFixed(3)),
        price: String(Number(data.priceUSD).toFixed(5)),
      }));

      console.log(updatedTokenDayData);

      setTokenData(updatedTokenDayData);
    } catch (err: any) {
      // If parsing fails, you will get a helpful error
      // message about the problem.
      setIsError(true);
      console.log(err.message);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="flex flex-col space-y-10 items-center "
        >
          <div className="flex space-x-4">
            <FormField
              control={form.control}
              name="tokenAddress"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter token address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="font-bold italics">
              Zap!
            </Button>
          </div>

          <div className="flex space-x-24">
            <FormField
              control={form.control}
              name="date_gte"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>
                    Start Date{" "}
                    <span className="text-sm text-zinc-500">(Optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(value) => field.onChange(value)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date_lte"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>
                    End Date{" "}
                    <span className="text-sm text-zinc-500">(Optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(value) => field.onChange(value)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
      {isError ? (
        <h1> There was a error, please try again </h1>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : tokenName === "" ? null : (
        <div className="flex flex-col space-y-12 w-[70%]">
          <div className="flex space-x-24 w-full text-lg justify-center">
            <div className="flex flex-col space-y-2">
              <Label>Token Name</Label>
              <Label>{tokenName}</Label>
            </div>
            <div className="flex flex-col space-y-2">
              <Label>Token Symbol</Label>
              <Label>{tokenSymbol}</Label>
            </div>
          </div>

          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Volume</th>
                <th className="py-2 px-4 text-left">Liquidity</th>
              </tr>
            </thead>
            <tbody>
              {tokenData.map((token) => (
                <tr key={token.date} className="border-b">
                  <td className="py-2 px-4 text-left">{token.date}</td>
                  <td className="py-2 px-4 text-left">{token.price}</td>
                  <td className="py-2 px-4 text-left">{token.volume}</td>
                  <td className="py-2 px-4 text-left">{token.liquidity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default PriceForm;
