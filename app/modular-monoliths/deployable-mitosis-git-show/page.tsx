import {language} from "@/app/lib/language";
import JavaDeployableMitosisGitShow from "./java";
import PythonDeployableMitosisGitShow from "./python";
import RubyDeployableMitosisGitShow from "./ruby";

export default function Page() {
  if (language === 'java') return <JavaDeployableMitosisGitShow />;
  if (language === 'ruby') return <RubyDeployableMitosisGitShow />;
  return <PythonDeployableMitosisGitShow />;
}
