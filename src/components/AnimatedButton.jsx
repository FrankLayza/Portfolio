import { motion } from "framer-motion";
import clsx from "clsx";

export default function AnimatedButton({
  children,
  variant = "scale",
  className,
  ...props
}) {
  const animations = {
    scale: {
      whileHover: { scale: 1.1, boxShadow: "0px 5px 15px rgba(0,0,0,0.3)" },
      whileTap: { scale: 0.95 },
    },
    tilt: {
      whileHover: { rotate: -3, scale: 1.05 },
      whileTap: { rotate: 0, scale: 0.95 },
      transition: { type: "spring", stiffness: 300 },
    },
    gradient: {
      whileHover: { scale: 1.05 },
    },
    underline: {
      whileHover: { color: "#34d399" },
    },
  };

  const baseClasses =
    "relative px-6 py-3 rounded-xl font-semibold overflow-hidden";

  return (
    <motion.button
      {...animations[variant]}
      className={clsx(
        baseClasses,
        variant === "gradient"
          ? "bg-emerald-accent text-background"
          : "bg-card border border-border text-foreground",
        className
      )}
      {...props}
    >
      {children}

      {/* Glass sweep effect for gradient */}
      {variant === "gradient" && (
        <motion.div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-[-100%] h-full w-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent"
            whileHover={{ left: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      )}

      {/* Underline effect */}
      {variant === "underline" && (
        <motion.div
          className="absolute bottom-1 left-0 h-0.5 bg-emerald-accent"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
}
