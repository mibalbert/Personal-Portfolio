/**
 * /page.jsx
 */

import Card from "@/components/Card";

export default function App() {
  // const [isPresent, safeToRemove] = usePresence();
  // const [scope, animate] = useAnimate();

  // useEffect(() => {
  //   if (isPresent) {
  //     const enterAnimation = async () => {
  //       await animate(scope.current, { opacity: 1 });
  //       await animate("li", { opacity: 1, x: 0 });
  //     };
  //     enterAnimation();
  //   } else {
  //     const exitAnimation = async () => {
  //       await animate("li", { opacity: 0, x: -100 });
  //       await animate(scope.current, { opacity: 0 });
  //       safeToRemove();
  //     };

  //     exitAnimation();
  //   }
  // }, [isPresent]);
  return (
    // <div className="pt-[80vh] pb-[50vh] flex flex-col gap-32">
    <div className="pb-[50vh] w-full flex flex-col justify-center">
      <div className="h-[100vh] pt-[20vh] flex flex-col gap-10 max-w-5xl ">
        <div className="text-6xl w-[80%] mx-auto font-bold">
          This is the fucking header
        </div>
        <div className="text-3xl w-[80%] mx-auto">Lorem ipsum dolor sit.</div>
        <div className="text-xl w-[80%] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          consectetur ab facere, sit debitis nulla impedit doloremque velit quod
          et repudiandae optio esse iure minus exercitationem! Impedit molestiae
          iste consectetur.
        </div>
      </div>
      <div className="flex flex-col gap-32">
        <Card className="mx-auto" />
        <Card className="mx-auto" />
        <Card className="mx-auto" />
        <Card className="mx-auto" />
      </div>
    </div>
  );
}
