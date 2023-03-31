const { assert, expect } = require("chai")
const { network, ethers, deployments } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Unit tests for Block Token", () => {
          beforeEach("runs before each test", async () => {
              let accounts, deployer, blockToken
              accounts = await ethers.getSigners()
              accounts[0] = deployer
              await deployments.fixture(["blockToken"])

              blockToken = await ethers.getContract("BlockToken", deployer)
          })

          it("deploys succefully", async () => {
              assert(blockToken.address)
          })
      })
