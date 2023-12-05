# Setup Git & GitHub for Collaboration in Frappe-Based Projects

## Steps for Setups in Main Project Hosting System

### Step 1: Install Git and Configure User
**Install Git**
```
sudo apt-get install git
```
**Configure Git User Email and User Name**
```
git config --global user.email "email_id"
```
```
git config --global user.name "user_name"
```

### Step 2: Create a Frappe Instance
Create a new Frappe instance as needed for your project. Refre to  [Frappe v15 Installation Steps](https://github.com/AbhishekKumar1602/FrappeFramework/blob/main/2.%20Frappe%20v15%20Installation%20Steps.md)

### Step 3: Safely Save Git-Related Files from Frappe Directory
Navigate to the frappe-bench/apps/frappe directory and cut/save the following hidden files:

- .git
- .git-blame-ignore-revs
- .github
- .gitignore

**NOTE:** These files are essential for updating Frappe.

### Step 4: Remove Git and Related Files
- Remove Git and related files from frappe-bench directory
```
rm -rf .git*
```

**NOTE:** Even though we saved the files in Step 3, we are clearing them again.

### Step 5: Initialize Git in the Apps Directory
- Move to frappe-bench/apps directory
```
cd frappe-bench/apps
```
- Paste ".gitignore" file in this directory.

- Initialize Git
```
git init
```
- Stage All Changes
```
git add .
```
- Commit All Staged Changes
```
git commit -m "Initial Commit"
```

**NOTE:** We'll only push the apps directory to GitHub and work with it.

### Step 6: Create Empty Repository on GitHub and Link to Local Repository
- Set the branch to main
```
git branch -M main
```
- Add the GitHub repository as the origin
```
git remote add origin "https://github.com/your-username/your-repo.git"
```
- Push the initial commit to GitHub
```
git push -u origin main
```

**NOTE:** Invite  developers through GitHub who will be collaborating for this project.

**To streamline collaboration on our Frappe project, we've established a versioning system on GitHub. We'll implement a branching strategy for developers, creating branches such as "test," "bugfix," and "feature."**

## Steps for Setting Up Collaboration in Developers' System

### Step 1: Set Up a Frappe Instance
- Begin by creating a new Frappe instance customized for the project's requirements. Make sure to install any custom apps used in the main system.

### Step 2: Clone the Project from GitHub
Clone the project from GitHub using the following command in any directory:

```
git clone "https://.........................................."
```
### Step 3: Navigate to Project Directory
Copy the .git folder and .gitignore file from the cloned directory, and paste them into the frappe-bench/apps directory.

**NOTE:** Switch to the "test" branch and pull any updates to verify the connection between Git and GitHub to the remote repository.

### Step 4: Connect Frappe Instance to Test Database
In the developer's Frappe instance site configuration, modify the settings to connect it to the project's test database. [Connecting Frappe Instance to an External Database](https://github.com/AbhishekKumar1602/FrappeFramework/blob/main/Settings%20for%20Development.md#connecting-frappe-instance-to-an-external-database)

Developers are advised to create personal local branches for their tasks without immediately pushing them to GitHub. Instead, the recommended workflow includes cloning the "test" branch, working on local branches, merging changes with the "test" branch, and finally pushing to the "test" branch on GitHub. This approach ensures an organized and collaborative development process.
    
## Connecting Frappe Instance to an External Database 
- To connect a Frappe instance to an external database, follow these steps:

### Step 1: Navigate to your Frappe instance's site directory. Typically, it can be found at frappe-bench/sites/your_site.

### Step 2: Inside the site directory, locate and open the `site_config.json` file. Modify its configuration as shown below:
```
{
 "db_name": "_e0b0d78dfac970a5",
 "db_password": "TWzOjwZCPu54Mrpw",
 "db_type": "postgres",
 "db_user": "_e0b0d78dfac970a5",
 "db_host": "192.168.20.106",
 "developer_mode": 1,
 "server_script_enabled": true
}
```
**Note:** The configuration above is a sample for connecting to an external PostgreSQL database. Ensure you replace the values with your specific database information.

### Step 3: In the configuration file of the database you are connecting to (e.g., the pg_hba.conf file for PostgreSQL), add the following line:
```
host    all    all    192.168.20.124/32    md5
```
**Note:** Replace 192.168.20.124 with the actual IP address of the system where your Frappe instance is running. This line allows access to the database from the specified IP address.
