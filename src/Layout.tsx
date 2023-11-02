interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default RootLayout;
