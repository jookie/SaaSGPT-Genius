It sounds like you might have cloned a repository from a different location and are trying to push to the original repository URL instead of your empty repository on GitHub. If you want to push to your own empty repository, you'll need to change the remote URL to point to your repository.

You can update the remote URL using the following Git command:

```bash
sudo git remote set-url origin https://github.com/jookie/SaaSGPT-Genius
```

Replace `your-username` with your GitHub username and `your-empty-repo` with the name of your empty repository.

After running this command, try to push your changes again:

```bash
git push origin master  # Or the branch name you are pushing
```

This should update the remote URL for your local repository, allowing you to push changes to your own empty repository on GitHub.