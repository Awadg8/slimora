import CtaButton from "@/component/ctaButton";

export default function Home() {
  return (
    <main>
      <CtaButton text="Get Started" className="text-xl font-bold w-[300px]" type="button" />
      
      <p className="para">
        The Allurion Gastric Balloon is a medical device. Before placing it,
        your doctor will carefully review your medical history to confirm your
        eligibility and ensure there are no contraindications. The weight loss
        programme with the Allurion Gastric Balloon can be offered to
        individuals who meet the criteria below. This list is not exhaustive;
        the full list of contraindications is available in the device’s
        instructions for use, which is provided to doctors4.
      </p>
    </main>
  );
}
