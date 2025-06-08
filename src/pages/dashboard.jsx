// src/pages/Dashboard.tsx
import { Copy, Download, Plus } from "lucide-react";


const Dashboard = () => {
    return (
        /* container */
        <div className="h-full w-full overflow-auto" style={{
            scrollbarWidth: 'none'
        }}>
            <div className="bg-cardC rounded-3xl w-full lex-1 h-max p-8 text-[#E8EAED]">
                {/* top-bar */}
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-3xl font-semibold">API Keys</h1>

                    {/* primary action */}
                    <button className="inline-flex items-center gap-2 rounded-full bg-[#3E65FF]/80 px-4 py-2 text-sm font-medium text-white hover:bg-[#5777ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                        <Plus size={16} strokeWidth={2.5} />
                        Create&nbsp;API&nbsp;key
                    </button>
                </div>

                {/* subtitle */}
                <p className="text-sm mb-6">Quickly test the Gemini&nbsp;API</p>

                {/* link */}
                <a
                    href="#"
                    className="mb-4 inline-block text-sm font-medium text-[#8AB4F8] hover:underline"
                >
                    API quickstart guide
                </a>

                {/* code block */}
                <div className="rounded-lg bg-[#202124]">
                    <pre className="whitespace-pre-wrap break-words p-6 text-sm font-mono leading-[1.35rem]">
                        {`curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY" \
-H 'Content-Type: application/json' \
-X POST \
-d '{
  "contents": [
    {
      "parts": [
        {
          "text": "Explain how AI works in a few words"
        }
      ]
    }
  ]
}'`}
                    </pre>

                    {/* code-toolbar */}
                    <div className="flex items-center gap-3 border-t border-[#303134] px-4 py-2 text-xs text-[#E8EAED]/70">
                        <Copy size={14} className="cursor-pointer hover:text-white" />
                        <Download
                            size={14}
                            className="cursor-pointer hover:text-white"
                        />
                        <span className="ml-1">Use code with caution.</span>
                    </div>
                </div>

                {/* explanatory text */}
                <p className="mt-6 text-sm">
                    Your API keys are listed below. You can also view and manage your
                    project and API keys in&nbsp;Google Cloud.
                </p>

                {/* key table */}
                <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-[#303134] text-[#BDC1C6] uppercase text-xs">
                                <th className="px-4 py-3 font-medium text-left">
                                    Project&nbsp;number
                                </th>
                                <th className="px-4 py-3 font-medium text-left">
                                    Project&nbsp;name
                                </th>
                                <th className="px-4 py-3 font-medium text-left">API&nbsp;key</th>
                                <th className="px-4 py-3 font-medium text-left">Created</th>
                                <th className="px-4 py-3 font-medium text-left">Plan</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#303134] bg-[#202124] text-[#E8EAED]">
                            <tr>
                                {/* project number (truncated) */}
                                <td className="px-4 py-4 underline decoration-dotted">…3299</td>

                                {/* project name */}
                                <td className="px-4 py-4 flex items-center gap-2">
                                    Generative&nbsp;Language&nbsp;Client
                                    <svg
                                        className="h-4 w-4 stroke-[#8AB4F8]"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18 13V6a2 2 0 00-2-2h-7"></path>
                                        <path d="M6 18h7a2 2 0 002-2v-7"></path>
                                        <path d="M15 9l-9 9"></path>
                                    </svg>
                                </td>

                                {/* api key (truncated) */}
                                <td className="px-4 py-4 underline decoration-dotted">…srTA</td>

                                {/* date */}
                                <td className="px-4 py-4">Apr 27,&nbsp;2024</td>

                                {/* plan info */}
                                <td className="px-4 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-xs">Free</span>
                                        <button className="self-start text-[#8AB4F8] hover:underline text-xs">
                                            Set&nbsp;up&nbsp;Billing
                                        </button>
                                        <button className="self-start text-[#8AB4F8] hover:underline text-xs">
                                            View&nbsp;usage&nbsp;data
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* footer */}
                <p className="mt-8 text-sm">
                    Remember to use API keys securely. Don&apos;t share or embed them in
                    public code. Use of Gemini API from a billing-enabled project is subject
                    to&nbsp;
                    <a href="#" className="text-[#8AB4F8] hover:underline">
                        pay-as-you-go&nbsp;pricing
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
