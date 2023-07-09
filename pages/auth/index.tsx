export default function AuthPage() {}

export async function getServerSideProps(context: any) {
  return {
    props: {},
    redirect: {
      permanent: false,
      destination: "/auth/login",
    }
  }
}