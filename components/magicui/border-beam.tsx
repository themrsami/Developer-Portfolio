import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
  children?: React.ReactNode; // Added children prop
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  className,
  size = 100,
  duration = 10,
  anchor = 90,
  borderWidth = 2,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
  children, // Destructure children prop
}) => {
  return (
    <div className="relative">
      <div
        style={
          {
            "--size": size,
            "--duration": duration,
            "--anchor": anchor,
            "--border-width": borderWidth,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            "--delay": `-${delay}s`,
          } as React.CSSProperties
        }
        className={cn(
          "absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
          "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
          "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
          className
        )}
      />
      <div className="relative z-10 rounded-[inherit]">
        {children}
      </div>
    </div>
  );
};
