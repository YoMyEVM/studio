import { chains } from "../utils/chains"; // Import the 'chains' array
import { Chain } from "../utils/chains"; // Import the 'Chain' interface

const ChainHorizontalBar = ({
  selectedChain,
  setSelectedChain,
}: {
  selectedChain: Chain | null; // Use 'Chain' here for a single selected chain
  setSelectedChain: (chain: Chain) => void; // 'Chain' is the type for an individual chain
}) => {
  // Function to switch chain in MetaMask
  const switchChain = async (chain: Chain) => {
    if (!window.ethereum) {
      alert("MetaMask is not installed.");
      return;
    }

    try {
      // Attempt to switch to the selected chain
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${chain.id.toString(16)}` }], // Convert chainId to hexadecimal
      });
    } catch (error: any) {
      // If the chain is not added, prompt the user to add it
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: `0x${chain.id.toString(16)}`,
                chainName: chain.name,
                rpcUrls: [chain.rpc],
                nativeCurrency: {
                  name: chain.symbol,
                  symbol: chain.symbol,
                  decimals: 18,
                },
                blockExplorerUrls: [chain.explorerUrl],
              },
            ],
          });
        } catch (addError) {
          console.error("Failed to add chain:", addError);
          alert("Failed to add the chain to MetaMask.");
        }
      } else {
        console.error("Failed to switch chain:", error);
        alert("Failed to switch the chain in MetaMask.");
      }
    }
  };

  // Function to handle chain selection
  const handleChainSelect = async (chain: Chain) => {
    await switchChain(chain); // Switch the chain in MetaMask
    setSelectedChain(chain); // Update the selected chain in the state
  };

  return (
    <div className="py-6">
      {/* Horizontal Bar */}
      <div
        className="grid gap-5 px-4"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        }}
      >
        {chains.map((chain) => (
          <div
            key={chain.id}
            onClick={() => handleChainSelect(chain)}
            className={`flex flex-row items-center justify-center text-center bg-gray-800 p-3 rounded-lg shadow-md cursor-pointer transition-shadow hover:shadow-lg ${
              selectedChain?.id === chain.id
                ? "border-4 border-[#fd01f5] bg-[#fd01f5] text-white"
                : "text-gray-300"
            }`}
          >
            <img
              src={chain.image || "default-image-url"} // Fallback image URL if not provided
              alt={chain.name}
              className="w-10 h-10 mr-2 rounded-full" // Adjust size of the image
            />
            <span className="text-white font-bold text-lg">{chain.name}</span> {/* Increase font size for name */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChainHorizontalBar;