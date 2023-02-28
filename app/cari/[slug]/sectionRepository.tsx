async function getDataRepos(param: string) {
  const res = await fetch(`https://api.github.com/users/${param}/repos`);
  await new Promise((r) => setTimeout(r, 4000));
  return res.json();
}

const Repolist = async ({ slug }: any) => {
  const dataRepos = await getDataRepos(slug);

  return (
    <>
      <p>List Repository</p>
      <div>{JSON.stringify(dataRepos)}</div>
    </>
  );
};

export default Repolist;
