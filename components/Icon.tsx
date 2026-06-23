import {
  ShieldCheck, Award, Sun, GraduationCap, HeartHandshake, Compass,
  FlaskConical, Scale, Ruler, Target, Eye, Users, Medal,
  Check, Plus, ArrowRight, FileText, MessageCircle, Phone, Mail,
  MapPin, Navigation, Send, Sparkles, X, Menu, Star,
  type LucideProps,
} from "lucide-react";

const MAP = {
  ShieldCheck, Award, Sun, GraduationCap, HeartHandshake, Compass,
  FlaskConical, Scale, Ruler, Target, Eye, Users, Medal,
  Check, Plus, ArrowRight, FileText, MessageCircle, Phone, Mail,
  MapPin, Navigation, Send, Sparkles, X, Menu, Star,
} as const;

export type IconName = keyof typeof MAP;

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = MAP[name];
  if (!Cmp) return null;
  return <Cmp {...props} />;
}
