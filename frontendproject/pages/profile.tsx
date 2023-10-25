import Head from "next/head";
import styles from "../styles/profile.module.scss";
import UserForm from "@/src/components/profile/user";

const UserInfo = function () {
  return (
    <>
      <Head>
        <title>Onebitflix - Meus Dados</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <UserForm/>
      </main>
    </>
  );
};

export default UserInfo;