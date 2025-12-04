import { useState } from 'react';
import './styles/form.css';

import Form from './components/Form';
import TextInput from './components/TextInput';
import SubmitButton from './components/SubmitButton';

type WeatherData = {
  tempC?: string;
  feelsLikeC?: string;
  desc?: string;
  humidity?: string;
  windKmph?: string;
};

function App() {
  const [city, setCity] = useState<string>('');
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (_e: React.FormEvent<HTMLFormElement>, fd: FormData) => {
    const raw = Object.fromEntries(fd.entries());
    const query = String(raw.cidade ?? '').trim();
    if (!query) {
      setError('Informe uma cidade.');
      setData(null);
      return;
    }
    setCity(query);
    setLoading(true);
    setError('');
    setData(null);

    try {
      const res = await fetch(`https://wttr.in/${encodeURIComponent(query)}?format=j1`);
      if (!res.ok) throw new Error('Falha ao buscar clima');
      const json = await res.json();
      const current = json.current_condition?.[0];
      const next: WeatherData = {
        tempC: current?.temp_C,
        feelsLikeC: current?.FeelsLikeC,
        desc: current?.weatherDesc?.[0]?.value,
        humidity: current?.humidity,
        windKmph: current?.windspeedKmph,
      };
      setData(next);
    } catch (_err) {
      setError('Não foi possível obter o clima. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>Clima Simples</h1>

      <Form onSubmit={handleSubmit}>
        <TextInput label="Cidade" name="cidade" placeholder="Digite a cidade (ex: São Paulo)" required />
        <SubmitButton text="Buscar" />
      </Form>

      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: '#fca5a5' }}>{error}</p>}

      {data && (
        <div className="result-card">
          <h2>{city}</h2>
          <div className="result-grid">
            <div>
              <strong>Condição:</strong> {data.desc}
            </div>
            <div>
              <strong>Temperatura:</strong> {data.tempC} °C
            </div>
            <div>
              <strong>Sensação:</strong> {data.feelsLikeC} °C
            </div>
            <div>
              <strong>Umidade:</strong> {data.humidity}%
            </div>
            <div>
              <strong>Vento:</strong> {data.windKmph} km/h
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;