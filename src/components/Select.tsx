interface SortSelectProps {
  selectedSortType: string;
  setSelectedSortType: React.Dispatch<React.SetStateAction<string>>;
}


export default function Select({
  selectedSortType,
  setSelectedSortType,
}: SortSelectProps) {
  return (
    <section>
      <select
        value={selectedSortType}
        onChange={(e) => setSelectedSortType(e.target.value)}
        style={{ marginTop: "10px" }}
      >
        <option value="">По умолчанию</option>
        <option value="title">По названию</option>
        <option value="body">По тексту</option>
      </select>
    </section>
  );
}
