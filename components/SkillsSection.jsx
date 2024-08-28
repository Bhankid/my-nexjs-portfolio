
import {
  CloudIcon,
  CodepenIcon,
  DatabaseIcon,
  DockIcon,
  EclipseIcon,
  GitGraphIcon,
  HashIcon,
  NetworkIcon,
  TypeIcon,
  WindIcon,
} from "@/components/ui/icons";

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-10 md:py-20 lg:py-3 bg-muted">
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Explore the technologies I work with.
          </p>
        </div>
        <div className="flex justify-center">
          <div>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh>
              <boxGeometry args={[4, 4, 4]} />
              <meshStandardMaterial color="#55efc4" />
            </mesh>
            <mesh>
              <boxGeometry args={[3, 3, 3]} />
              <meshStandardMaterial color="#00b894" />
            </mesh>
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color="#81ecec" />
            </mesh>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SkillItem
            icon={<CodepenIcon className="h-12 w-12" />}
            name="React"
          />
          <SkillItem
            icon={<NetworkIcon className="h-12 w-12" />}
            name="Node.js"
          />
          <SkillItem
            icon={<TypeIcon className="h-12 w-12" />}
            name="TypeScript"
          />
          <SkillItem
            icon={<WindIcon className="h-12 w-12" />}
            name="Tailwind CSS"
          />
          <SkillItem
            icon={<EclipseIcon className="h-12 w-12" />}
            name="JavaScript"
          />
          <SkillItem icon={<HashIcon className="h-12 w-12" />} name="HTML" />
          <SkillItem icon={<CodepenIcon className="h-12 w-12" />} name="CSS" />
          <SkillItem icon={<GitGraphIcon className="h-12 w-12" />} name="Git" />
          <SkillItem
            icon={<DatabaseIcon className="h-12 w-12" />}
            name="MongoDB"
          />
          <SkillItem
            icon={<DatabaseIcon className="h-12 w-12" />}
            name="PostgreSQL"
          />
          <SkillItem icon={<DockIcon className="h-12 w-12" />} name="Docker" />
          <SkillItem icon={<CloudIcon className="h-12 w-12" />} name="AWS" />
        </div>
      </div>
    </section>
  );
}

function SkillItem({ icon, name }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      {icon}
      <h4 className="text-lg font-semibold">{name}</h4>
    </div>
  );
}
