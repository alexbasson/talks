import {language} from "@/app/lib/language";
import PythonDirectoryStructure from "./python";
import RubyDirectoryStructure from "./ruby";

export default function Page() {
  if (language === 'ruby') return <RubyDirectoryStructure />;
  return <PythonDirectoryStructure />;
}
