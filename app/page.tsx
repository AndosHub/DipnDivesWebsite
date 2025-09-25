import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CheckCircle, Waves, Mountain, Sun, Fish, ArrowRight, Mail, Users, Zap } from "lucide-react"
import Image from "next/image"

export default function BetaSignupPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="animate-wave">
                <Image src="/logo.png" alt="Dip 'n' Dives Logo" width={48} height={48} className="rounded-lg" />
              </div>
              <span className="text-2xl font-bold text-gradient">Dip 'n' Dives</span>
            </div>
            <Badge variant="secondary" className="bg-accent text-accent-foreground animate-pulse-glow">
              Beta Coming Soon
            </Badge>
          </div>
        </div>
      </header>

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-float mb-8">
              <Badge variant="secondary" className="mb-6 bg-primary text-primary-foreground text-lg px-6 py-2">
                <Waves className="mr-2 h-5 w-5" />
                Off the Grid, Into the Water
              </Badge>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Dive Into <span className="text-gradient">Adventure</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
              Join the beta community of outdoor enthusiasts discovering hidden swimming spots, secret diving locations,
              and off-the-beaten-path aquatic adventures.
            </p>

            <Card className="max-w-2xl mx-auto border-2 border-primary shadow-2xl bg-card/95 backdrop-blur">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-gradient flex items-center justify-center gap-2">
                  <Mail className="h-6 w-6" />
                  Get Early Access
                </CardTitle>
                <CardDescription className="text-lg">Be the first to explore when we launch the beta</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    placeholder="Enter your email address"
                    type="email"
                    className="flex-1 text-lg py-6 border-2 border-secondary focus:border-primary transition-colors"
                  />
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold transition-all hover:scale-105 animate-pulse-glow"
                  >
                    Join Beta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span>2,847 adventurers waiting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-accent" />
                    <span>Launch in 6 weeks</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: "0.5s" }}>
          <Mountain className="h-12 w-12 text-primary/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <Sun className="h-16 w-16 text-accent/40" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: "1.5s" }}>
          <Fish className="h-10 w-10 text-secondary/30" />
        </div>
        <div className="absolute bottom-40 right-10 animate-float" style={{ animationDelay: "2s" }}>
          <Waves className="h-14 w-14 text-primary/30" />
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">What Awaits You</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Beta access includes exclusive features for the ultimate aquatic adventure experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-secondary hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl bg-card">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto animate-float">
                  <Mountain className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Hidden Locations</CardTitle>
                <CardDescription className="text-base">
                  Discover secret swimming holes and diving spots known only to locals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-secondary hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl bg-card">
              <CardHeader className="text-center">
                <div
                  className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Adventure Community</CardTitle>
                <CardDescription className="text-base">
                  Connect with fellow water enthusiasts and share your discoveries
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-secondary hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl bg-card">
              <CardHeader className="text-center">
                <div
                  className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4 mx-auto animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <Waves className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Safety First</CardTitle>
                <CardDescription className="text-base">
                  Real-time conditions, safety ratings, and emergency contact info
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Make a Splash?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of adventurers already signed up for exclusive beta access
            </p>

            <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    placeholder="Your adventure starts with your email"
                    type="email"
                    className="flex-1 text-lg py-6 border-2 border-primary/30 focus:border-primary"
                  />
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
                  >
                    Dive In
                    <Waves className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No spam, just pure adventure updates</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <Image src="/logo.png" alt="Dip 'n' Dives Logo" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold">Dip 'n' Dives</span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-background/80 mb-2">Off the Grid, Into the Water</p>
              <p className="text-sm text-background/60">© 2024 Dip 'n' Dives. Beta launching soon.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
