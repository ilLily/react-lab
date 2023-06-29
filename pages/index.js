import Head from 'next/head';
import RoundBtn from '@/components/button/roundBtn';

// import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Go With Me</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="h container-outer ">
        <nav className="h container-nav">
          <div className="h logo">
            <img src="/home/h-logo.png" alt="" />
          </div>
          <div className="h btns">
            <div className="h btn d-center">商城</div>
            <div className="h btn d-center">活動</div>
            <div className="h btn d-center">餐廳</div>
            <div className="h btn d-center">論壇</div>
          </div>

          <div className="roundBtnBox">
            <RoundBtn icon="/home/h-cart.png"></RoundBtn>
            <RoundBtn icon="/home/h-user.png"></RoundBtn>
          </div>
        </nav>
        <div className="h headerPhoto d-center">
          <img src="/home/h-header-photo.png" alt="#" />
        </div>
      </header>
      <main className="container-outer"></main>
    </>
  );
}
