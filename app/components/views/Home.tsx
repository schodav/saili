import Snake from "./Snake";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-3xl">Welcome to SAILI</h1>
      <p className="mt-5">
        This is a students project created in just 48h at the ÖH Hackathon 2024
      </p>
      <p className="mt-5">Please Sign in to leck mich am Arsch.</p>

      <div>
        <Snake></Snake>
      </div>
    </div>
  );
}
