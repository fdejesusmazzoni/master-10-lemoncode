import React from "react";
import { Link, generatePath } from "react-router-dom";
import { useCompanyContext } from "./providers";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { name: companyName, setName: setCompanyName } = useCompanyContext();

  React.useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = () => {
    fetch(`https://api.github.com/orgs/${companyName}/members`)
      .then((response) => response.json())
      .then((json) =>
        Array.isArray(json) ? setMembers(json) : setMembers(null)
      )
      .catch(() => setMembers(null));
  };

  const handleCompanyNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompanyName(event.target.value);
  };

  const handleSearchMembers = () => {
    loadMembers();
  };

  console.log(members);
  return (
    <>
      <h2>Hello from List page</h2>
      <input value={companyName} onChange={handleCompanyNameChange}></input>
      <button onClick={handleSearchMembers}>Buscar</button>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {members ? (
            members.map((member) => (
              <tr key={member.id}>
                <td>
                  <img src={member.avatar_url} style={{ width: "5rem" }} />
                </td>
                <td>
                  <span>{member.id}</span>
                </td>
                <td>
                  <Link to={generatePath("/detail/:id", { id: member.login })}>
                    {member.login}
                  </Link>{" "}
                </td>
              </tr>
            ))
          ) : (
            <p>No se ha encontrado la empresa</p>
          )}
        </tbody>
      </table>
    </>
  );
};
