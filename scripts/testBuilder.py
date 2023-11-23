import os
import shutil
import subprocess

exitMessage = "Press Enter key to exit..."
current_working_directory = os.getcwd()

splitted = current_working_directory.split('\\')


while os.path.isdir("client") == False and len(splitted) > 2:
    os.chdir("..")
    current_working_directory = os.getcwd()

    splitted = current_working_directory.split('\\')

if (len(splitted) == 2 and splitted[1] == ''):
    print("ERROR: client folder not found")
    input(exitMessage)
    exit()

try:

    # Change the current working directory to the client folder
    os.chdir('client')

    npm_build_command = 'npm install'
    subprocess.run(npm_build_command, shell=True, check=True)

    # Build the Angular project
    ng_build_command = 'ng build --configuration "production" --base-href "https://mielesgames.nl"'
    subprocess.run(ng_build_command, shell=True, check=True)

    source_index_html = 'dist/website/index.html'
    destination_404_html = 'dist/website/404.html'
    shutil.copyfile(source_index_html, destination_404_html)
    
    gh_pages_command = "npx angular-cli-ghpages --dir=dist/website"
    subprocess.run(gh_pages_command, shell=True, check=True)
    
except Exception as e:
    print(f'An error occurred while building the project: {e}')
    input(exitMessage)
    exit()
input(exitMessage)
exit()