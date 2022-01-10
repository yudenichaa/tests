export default function App() {
  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <p>Number</p>
        <input type="number" />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <p>tel</p>
        <input type="tel" />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <p>pattern</p>
        <input inputMode="decimal" pattern="[0-9]*" />
      </div>
    </div>
  );
}
