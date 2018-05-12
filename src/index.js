import Github from "@octokit/rest";

const github = new Github();

github.users
  .getForUser({ username: "github" })
  .then(
    response =>
      (document.body.innerHTML = `<pre>${JSON.stringify(
        response,
        null,
        2
      )}</pre>`)
  );
