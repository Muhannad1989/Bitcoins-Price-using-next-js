import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';
import Prices from '../components/Prices';

const Index = ({ bpi }) => {
  return (
    <Layout>
      <div>
        <Prices bpi={bpi} />
        <style global jsx>{`
          .form-control {
            width: 70%;
            margin: 20px auto;
          }
        `}</style>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await Fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi,
  };
};

export default Index;
