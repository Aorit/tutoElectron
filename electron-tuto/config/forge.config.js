module.exports = {
    publishers: [
      {
        name: '@electron-forge/publisher-github',
        config: {
          repository: {
            owner: 'aorit',
            name: 'electron-tuto',
          },
          prerelease: false,
          draft: true,
        },
      },
    ],
  }