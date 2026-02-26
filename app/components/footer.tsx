export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Lab K9 Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
