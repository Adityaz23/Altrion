import { auth } from "@/lib/btr-auth/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({headers: await headers()})
  if(session?.user)redirect("/")
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link href="/" className="auth-logo flex items-center gap-2">
          <Image
            src="/favicon.ico"
            alt="Altrion logo"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
          <span className="text-xl font-semibold text-orange-500">Altrion</span>
        </Link>
        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>
      <section className="auth-right-section">
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className="auth-blog-quote">
            The personalized alert system is a game-changer. Altrion’s
            notifications are precise and actionable, so I never miss a setup.
            Plus the charting tools are smooth and lightweight.
          </blockquote>
          <div className="flex flex-col justify-between">
            <cite className="auth-testimonial-author">- Omar N.</cite>
            <p className="max-md:text-xs text--500">Part-time Trader</p>

            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Image
                  src="/star.png"
                  alt="Star icons"
                  width={20}
                  height={20}
                  key={star}
                  className="w-5 h-5"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
            <Image src="/assets/images/Dashboard.jpeg" alt="Dasboard Page Image" width={1440} height={1150} className="auth-dashboard-preview absolute top-0"/>

        </div>
      </section>
    </main>
  );
};
export default Layout;
