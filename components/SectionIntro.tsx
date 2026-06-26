type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  align?: "left" | "center";
};

export function SectionIntro({ eyebrow, title, children, align = "left" }: SectionIntroProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-clay">{eyebrow}</p>
      ) : null}
      <h2 className="serif text-balance text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children ? <div className="mt-5 text-pretty text-base leading-8 text-ink/68">{children}</div> : null}
    </div>
  );
}
