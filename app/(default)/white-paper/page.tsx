
export const metadata = {
  title: "FirstDevs - White Paper",
  description: "Page description",
};
export default function Home() {
  return (
    <>
        <iframe
                src="/files/firstdevs-white-paper.pdf"
                height="650rem"
                className="mt-4 md:mx-auto sm:w-full sm:mx-0 md:w-2/3"
                title="First Devs Whitepaper"
        ></iframe>
    </>
  );
}