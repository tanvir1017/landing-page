import AnnouncementBar from "@/components/pages/home/announcement-bar";
import BackgroundTexture from "@/components/pages/home/bg-texture";
import CTAButtons from "@/components/pages/home/cta-button";
import HeroBadge from "@/components/pages/home/hero-badge";
import HeroSubtitle from "@/components/pages/home/hero-subtitle";
import HeroTitle from "@/components/pages/home/hero-title";
import MacBookMockup from "@/components/pages/home/mac";
import Navbar from "@/components/pages/home/navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-white to-slate-50 overflow-hidden">
      {/* Background textures and gradients */}
      <BackgroundTexture />

      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navigation */}
      <Navbar />

      {/* Main Hero Content */}
      <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-120px)] pt-16 px-4 md:px-8">
        <div className="flex flex-col items-center max-w-5xl mx-auto">
          {/* Badge */}
          <HeroBadge />

          {/* Title */}
          <HeroTitle />

          {/* Subtitle */}
          <HeroSubtitle />

          {/* CTA Buttons */}
          <CTAButtons />

          {/* Mockup */}
          <MacBookMockup />
        </div>
      </div>
    </div>
  );
}
