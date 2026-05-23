const SkillCard = ({ skill }) => {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl hover:scale-105 transition">

      <h3 className="text-xl font-semibold">
        {skill}
      </h3>

    </div>
  );
};

export default SkillCard;