export default function SafetyProfile() {
  return (
    <section className="pt-16 pb-30 sm:py-40">
      <div className="max-width">
        {/* Top Content */}
        <div className="flex flex-col gap-4 sm:gap-6 mb-25 sm:mb-40">
          <p className="text-xs sm:text-[20px] text-[#B5B5B5] text-center sm:text-justify ">
            The SlimOra Balloon is a temporary medical device indicated for weight loss treatment in adults over 18 years old who live with excess weight or obesity with a body mass index (BMI) ≥ 27 kg/m². The SlimOra gastric balloon system should be used as part of a monitored behaviour and nutrition modification programme.
          </p>
          <p className="text-xs sm:text-[20px] text-[#B5B5B5] text-center sm:text-justify">
            This is a regulated health product that has been CE marked since 2015.
          </p>
          <p className="text-xs sm:text-[20px] text-[#B5B5B5] text-center sm:text-justify">
            If you are interested, discuss it with your doctor to carefully evaluate both the risks and benefits of the treatment and to confirm that this solution is suitable for you.
          </p>
          <p className="text-xs sm:text-[20px] text-[#B5B5B5] text-center sm:text-justify">
            Eligibility for the placement of an SlimOra Balloon will be assessed by a certified doctor after an initial consultation and a careful review of your medical history.
          </p>
        </div>

        {/* Middle Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-2 items-center mb-4 sm:mb-20">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-white font-urbanist text-2xl sm:text-[40px] font-bold text-center sm:text-left">
              A documented
            </h2>
            <h2 className="text-[#8ea94d] font-urbanist text-2xl sm:text-[64px] font-bold sm:font-light text-center sm:text-left">
              Safety Profile
            </h2>
            <p className="text-white font-urbanist text-xl sm:text-3xl font-bold mt-4 sm:mt-10 sm:max-w-[460px] text-center sm:text-justify">
              Potential adverse reactions and complications include, but are not limited to the following:
            </p>
          </div>

          {/* Right Column */}
          <div className="text-[#b5b5b5] text-xs sm:text-lg text-center sm:text-justify">
            <p>
              Insufficient or no weight loss | Adverse health consequences resulting from weight loss | Fainting/vasovagal reaction during placement | Nausea and/or vomiting | Chest pain | Heartburn or GERD | Oesophagitis or oesophageal ulcer | Abdominal distension with or without discomfort | Abdominal pain | Gastritis | Gastric dilatation | Gastric or duodenal ulcers | Mallory-Weiss tear | Mucosal laceration | GI bleeding | Difficulty breathing | Dehydration | Diarrhoea | Constipation | Fatigue | Halitosis | Infection | Allergic reaction | Adverse tissue reaction | Pancreatitis | Aspiration, aspiration pneumonia | Esophageal, gastric, intestinal or other organ trauma or perforation | Esophageal, gastric, small bowel, or large bowel obstruction | Need for endoscopic, radiologic, or surgical intervention to repair organ trauma, perforation, obstruction or other complication | Cardiorespiratory sequelae, such as anaphylaxis, myocardial infarction (heart attack), arrhythmia, cardiac arrest, and/or bronchial obstruction and respiratory arrest | Unintended migration of the device | Detachment of balloon during removal, tracheal aspiration, and respiratory arrest | Spontaneous hyperinflation of the balloon. This may be asymptomatic or symptomatic. Symptoms may include abdominal pain, abdominal distention with or without discomfort, difficulty breathing, vomiting, or may cause gastric perforation | Death
            </p>
          </div>
        </div>

        {/* Bottom Content - Italicized Note */}
        <div className="">
          <p className="text-[#B5B5B5] italic font-extrabold text-justify text-xs sm:text-lg">
            In rare cases, the SlimOra Balloon may be vomited at the end of the placement period or may require endoscopic or surgical intervention for removal. Endoscopic intervention should be primarily performed in the following cases: balloon intolerance, spontaneous hyperinflation, gastric outlet obstruction
          </p>
        </div>
      </div>
    </section>
  );
}