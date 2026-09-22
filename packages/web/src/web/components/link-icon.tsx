import { Mail, Link as LinkIconLucide, ShoppingBag } from "lucide-react";
import {
  SiDiscord,
  SiInstagram,
  SiTiktok,
  SiTwitch,
  SiX,
  SiYoutube,
} from "react-icons/si";
import type { LinkIcon as LinkIconName } from "../lib/links";

const map = {
  discord: SiDiscord,
  youtube: SiYoutube,
  instagram: SiInstagram,
  tiktok: SiTiktok,
  twitter: SiX,
  twitch: SiTwitch,
  shop: ShoppingBag,
  mail: Mail,
  link: LinkIconLucide,
} as const;

function LinkGlyph({
  name,
  className,
}: {
  name: LinkIconName;
  className?: string;
}) {
  const Glyph = map[name] ?? map.link;
  return <Glyph className={className} aria-hidden="true" />;
}

export default LinkGlyph;
