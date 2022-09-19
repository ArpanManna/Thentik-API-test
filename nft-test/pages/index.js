import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home() {

  const createContract = async () => {
    let options = {
      method: 'POST',
      url: 'https://thentic.p.rapidapi.com/nfts/contract',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '05059018e8msh4393a4f5285844fp1995cajsn8166f3edfb79',
        'X-RapidAPI-Host': 'thentic.p.rapidapi.com'
      },
      data: '{"key":"LgJ4l39u3Xx7Tb1RpcZWkOkdiWrxadUW","chain_id":97,"name":"T NFT","short_name":"TNFT"}'
    };

    let response = await axios.request(options)
    console.log(response)
    //console.log(response.data['transaction_url'])
    let tr_url = response.data['transaction_url']
    console.log(tr_url)
    //let tr_res = await axios.request(tr_url)
    let res = window.open(tr_url)
    console.log(res)
    //console.log(tr_res)
    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });
  }
  return (
    <div>
          <Head>
            <title>VIPunks</title>
            <meta name="description" content="VIPunks-Dapp" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <div>
              <h1 className={styles.title}>Welcome to VIPunks!</h1>
              <div className={styles.description}>
                Its an NFT collection for Veritas Supporters.
              </div>
              <div className={styles.description}>
               <button onClick={createContract} className={styles.button}>Create Contract</button>
              </div>
              
            </div>
            
          </div>

          <footer className={styles.footer}>Made with &#10084; by Veritas Interactive</footer>
        </div>
  )
}
