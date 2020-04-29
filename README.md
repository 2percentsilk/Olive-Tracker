# 🐶 Olive Tracker

An application used for tracking places [Olive the Corgi](https://www.instagram.com/olivemycorgi/) has visited.
Familiarize yourself with this app to get started on our team before tackling the main repo!

## Get Started

## Install developer tools

1. Allow installation of unshipped software by running this from an elevated command prompt:

    ```
    \\PreRelease\JustLetMeRunThis\Prerelease.cmd
    ```
    
1. Install the .NET Core SDK version specified in our [global.json](https://devdiv.visualstudio.com/DevDiv/_git/VSCloudKernel?path=%2Fglobal.json). E.g. [.NET Core SDK 3.1.102](https://dotnet.microsoft.com/download/dotnet-core/thank-you/sdk-3.1.102-windows-x64-installer)
1. Unzip the [nuget.exe and the VSTS Credential Provider](https://devdiv.pkgs.visualstudio.com/_apis/public/nuget/client/CredentialProviderBundle.zip) and make sure the directory with the expanded files is on your system's `PATH`.
1. Install [VS Code](https://code.visualstudio.com/) and we use it mostly for development in TypeScript and debugging our VS Code extension.
1. Install [TypeScript](https://code.visualstudio.com/docs/languages/typescript) to compile our code locally.
1. Install [Rust](https://www.rust-lang.org/tools/install) for the fun of it!

### Additional recommended tools/SDKs


* [CosmosDB Local Emulator](https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator) We use Cosmos DB for a number of our data stores, and there may arise a time where you'd like to test these services locally.
* [Advanced REST client](https://install.advancedrestclient.com/install#/install) Installing some sort of REST client so you can make HTTP requests/web socket connections to test RichNav web APIs easily.

## Get the source code

Clone the following repos in addition to this one:

1. [Anything Tracker](aka.ms/microsoft) - This is our team's main repo, including server and build pipeline.
1. [Map Services](aka.ms/microsoft) - Our VS Code extension for leveraging Azure Maps and associated data.
1. [AnythingTracker.VisualStudio](aka.ms/microsoft) - Our VS extension for Anything Tracker.
1. [AnythingTracker.ChromePlugin](aka.ms/microsoft) - Our Chrome extension for Anything Tracker.

## Request Access

1. Using https://myaccess, request access to "AnythingTracker" with the permission "Team".
1. Join the team on GitHub by going to https://repos.opensource.microsoft.com/, find "Microsoft" in the list of available Microsoft GitHub Organizations and click the Join button. Then search for the "AnythingTracker" team. You will see our team members listed and be prompted to request access.
1. Reach out to [Olive](https://www.instagram.com/olivemycorgi/) if you're in need of a puppy while you wait for permissions to propogate.

## Setup

![Install Windows](https://www.hanselman.com/blog/content/binary/windows-program-manager-vectorized.png "Windows 3.1")

### Links

- [Base App](https://docs.microsoft.com/en-us/azure/azure-maps/tutorial-create-store-locator)
