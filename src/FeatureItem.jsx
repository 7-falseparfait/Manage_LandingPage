export function FeatureItem({ number, text }) {
  return (
    <div className="flex items-center bg-very-pale-red rounded-lg">
      <div className="bg-primary text-white rounded-full px-7 py-2 font-bold">
        {number.toString().padStart(2, "0")}
      </div>
      <h3 className="ml-4 text-dark-blue">{text}</h3>
    </div>
  );
}
