import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image
        src="/images/CamisaAzulMelhorPerfil.jpg"
        alt="Minha foto de perfil"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h1 className="text-4xl font-bold mt-4">David</h1>
      <p className="text-lg mt-2">Desenvolvedor Node/React</p>
    </main>
  );
}