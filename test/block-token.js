const { assert, expect } = require("chai")
const { network, ethers, deployments } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Unit tests for Block Token", () => {
          let accounts, deployer, blockToken
          beforeEach("runs before each test", async () => {
              accounts = await ethers.getSigners()
              accounts[0] = deployer
              await deployments.fixture(["blockToken"])

              blockToken = await ethers.getContract("BlockToken")
          })

          it("deploys succefully", async () => {
              assert(blockToken.address)
          })

          describe("constructor", () => {
              it("intializes name & symbol correctly", async () => {
                  const tokenName = (await blockToken.name()).toString()
                  const tokenSymbol = (await blockToken.symbol()).toString()

                  assert.equal(tokenName, "Block")
                  assert.equal(tokenSymbol, "BLK")
              })
          })
      })
