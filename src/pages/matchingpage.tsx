import { useRecoilValue } from 'recoil';
import { hashtagListState } from '../recoil/recoilState';
import { postHashtags } from '../api/perfumeMatching';
import { useState } from 'react';
import axios from 'axios';

export default function MatchingPage() {
  const hashtags = useRecoilValue(hashtagListState);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (hashtags.length === 0) {
      setError('해시태그를 선택해 주세요.');
      return;
    }
    try {
      const data = await postHashtags(hashtags);
      setResponse(data);
      setError(null);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message);
      } else {
        setError('서버와 통신 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div>
      <h1>Matching Page</h1>
      <button onClick={handleSubmit}>Submit Hashtags</button>
      {response && (
        <div>
          <h2>Recommended Perfumes</h2>
          <h3>Main Perfume</h3>
          <div>
            <img
              src={response.mainPerfume.imageURL}
              alt={response.mainPerfume.name}
            />
            <p>
              {response.mainPerfume.name} by {response.mainPerfume.brand}
            </p>
          </div>
          <h3>Sub Perfumes</h3>
          {response.subPerfumes.map((perfume: any) => (
            <div key={perfume.id}>
              <img src={perfume.imageURL} alt={perfume.name} />
              <p>
                {perfume.name} by {perfume.brand}
              </p>
            </div>
          ))}
        </div>
      )}
      {error && <div>Error: {error}</div>}
    </div>
  );
}
