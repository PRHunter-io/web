import { parseCookies } from 'nookies';

const token = parseCookies().token
const apiUrl = process.env.NEXT_PUBLIC_EXTERNAL_API_URL;
const options = {
  Accept: 'application/json',
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json'
};

class CreateBountyClass {
  async getAvailableRepos(setRepoOptions) {
    let optionsArr = [];

    try {
      const res = await fetch(`${apiUrl}/repo`, {
        headers: options,
      });

      const data = await res.json();

      data.forEach(element => {
        optionsArr.push({
          value: element.full_name,
          label: element.name
        });
      });

      setRepoOptions(optionsArr)
    } catch (err) {
      console.log(err);
    }
  };

  async getAvailableIssues(repoName, setIssuesOptions) {
    let optionsArr = [];
    if (!token) return;

    try {
      const res = await fetch(`${apiUrl}/repo/${repoName}/issues`, {
        headers: options,
      });

      const data = await res.json();

      if (data.length > 0) {
        data.forEach(element => {
          optionsArr.push({
            value: element.number,
            label: element.title
          });
        });
      } else {
        optionsArr = ['empty'];
      }

      setIssuesOptions(optionsArr);
    } catch (err) {
      console.log(err);
    }
  };

  async submitData(bountyData, setFormCompleted) {
    const repo_owner = bountyData.repo_name.split('/')[0];
    const repo_name = bountyData.repo_name.split('/')[1];
    const tags = bountyData.tags ? bountyData.tags : [];

    const formattedBody = {
      ...bountyData,
      repo_owner,
      repo_name,
      languages: [
        bountyData.languages
      ],
      tags
    };

    const data = JSON.stringify(formattedBody);

    try {
      const res = await fetch(`${apiUrl}/bounty`, {
        method: 'POST',
        headers: options,
        body: data
      });
      const response = await res.json();
      console.log(response);
      setFormCompleted(true);
    } catch (err) {
      console.error('Failed to fetch bounty:', err)
    }
  }
}

export const CreateBountyService = new CreateBountyClass()