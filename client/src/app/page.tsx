import PriceForm from "@/components/PriceForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-24 p-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Welcome to Mobula</h1>
        <h3 className="text-xl text-zinc-500 font-semibold">
          Get instant token price feeds
        </h3>
      </div>

      <PriceForm />
    </main>
  );
}
