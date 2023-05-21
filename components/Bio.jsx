const Bio = () => {
  return (
    <section className="md:max-w-xl max-w-lg mx-auto md:px-0 px-4 mt-8 space-y-2.5">
      <h2 className="underline text-xl font-semibold text-[#0F172A] dark:text-white">
        Bio 📑
      </h2>

      <div className="space-y-1">
        <div className="flex gap-3.5">
          <span className="font-semibold">2002</span>{" "}
          <p>Born in Rajasthali Rangamati, Bangladesh.</p>
        </div>
        <div className="flex gap-3">
          <span className="font-semibold">2020</span>{" "}
          <p>
            Completed the Higher Secondary Certificate (HSC) in the Dhaka State
            Collage
          </p>
        </div>
        <div className="flex gap-3">
          <span className="font-semibold">2021 to present</span>{" "}
          <p>Working as a Developer</p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
