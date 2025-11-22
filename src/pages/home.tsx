import MatchingForm from '@/widgets/matching-form/matching-form';

const Home = () => {
  return (
    <>
      <h1>홈 화면입니다</h1>
      <MatchingForm onSubmit={(data) => console.log(data)} />
    </>
  );
};

export default Home;
