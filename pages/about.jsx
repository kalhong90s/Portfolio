const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <p>env {process.env.NEXT_PUBLIC_GITHUB_USERNAME}</p>
      <p>env {process.env.DEV_TO_API_KEY}</p>

    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
