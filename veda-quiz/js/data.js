// Auto-generated question bank for VEDA IIT MCQ Power Book
const QUIZ_DATA = [
  {
    "id": "digital",
    "title": "Digital Electronics & Logic Design",
    "tagline": "Every great chip began as a single logic gate.",
    "weight": "High Weightage",
    "sections": [
      {
        "name": "Number Systems & Codes",
        "questions": [
          {
            "q": "Convert (2F)16 to decimal.",
            "options": [
              "45",
              "43",
              "47",
              "32"
            ],
            "correct": 2
          },
          {
            "q": "The binary number 10110110 in hexadecimal is:",
            "options": [
              "9B",
              "A6",
              "6B",
              "B6"
            ],
            "correct": 3
          },
          {
            "q": "The 4-bit 2's complement of 0101 is:",
            "options": [
              "1101",
              "1011",
              "1010",
              "0101"
            ],
            "correct": 1
          },
          {
            "q": "The 8-bit 2's complement representation of −18 is:",
            "options": [
              "11101110",
              "10010010",
              "11101111",
              "11101101"
            ],
            "correct": 0
          },
          {
            "q": "The range of numbers representable in 8-bit 2's complement is:",
            "options": [
              "−128 to +127",
              "−127 to +127",
              "−255 to +255",
              "−128 to +128"
            ],
            "correct": 0
          },
          {
            "q": "Using 4-bit 2's complement subtraction, 1100 − 0101 gives:",
            "options": [
              "1011",
              "1001",
              "0101",
              "0111"
            ],
            "correct": 3
          },
          {
            "q": "Adding 01100100 and 00110010 in 8-bit 2's complement hardware produces:",
            "options": [
              "Underflow, result is 0",
              "No overflow, result is +150",
              "Overflow (two positives give a negative result)",
              "A carry-out but a perfectly valid result"
            ],
            "correct": 2
          },
          {
            "q": "Binary 1011 converted to Gray code is:",
            "options": [
              "1101",
              "1110",
              "1010",
              "0111"
            ],
            "correct": 1
          },
          {
            "q": "Gray code 1101 converted to binary is:",
            "options": [
              "1001",
              "1010",
              "1000",
              "1011"
            ],
            "correct": 0
          },
          {
            "q": "BCD addition: 0111 + 0101 gives binary 1100, which needs a +0110 correction. The final BCD result is:",
            "options": [
              "0001 0001",
              "0001 0010",
              "1100",
              "0010 0010"
            ],
            "correct": 1
          },
          {
            "q": "Gray code is used for FIFO pointers because:",
            "options": [
              "It needs fewer flip-flops",
              "It avoids carry generation in adders",
              "Only one bit changes per count, so clock-domain crossing is safe",
              "It counts faster than binary"
            ],
            "correct": 2
          }
        ]
      },
      {
        "name": "Boolean Algebra & Logic Optimization",
        "questions": [
          {
            "q": "The output of a 2-input XOR gate is 1 when:",
            "options": [
              "at least one input is 1",
              "both inputs are 1",
              "both inputs are 0",
              "the inputs are different"
            ],
            "correct": 3
          },
          {
            "q": "By De Morgan's theorem, (A + B)' equals:",
            "options": [
              "A+B'",
              "A'+B'",
              "A·B",
              "A'·B'"
            ],
            "correct": 3
          },
          {
            "q": "Minimum number of 2-input NAND gates needed to build a 2-input AND gate:",
            "options": [
              "3",
              "4",
              "2",
              "1"
            ],
            "correct": 2
          },
          {
            "q": "The dual of the expression A + B·C is:",
            "options": [
              "A·(B + C)",
              "A' + B'·C'",
              "A'·(B' + C')",
              "A·B + C"
            ],
            "correct": 0
          },
          {
            "q": "How many 2-input NAND gates are needed to build a 2-input XOR gate?",
            "options": [
              "5",
              "4",
              "6",
              "3"
            ],
            "correct": 1
          },
          {
            "q": "Simplify F = (A + B)(A + B')(A' + B).",
            "options": [
              "A",
              "A + B",
              "A·B",
              "B"
            ],
            "correct": 2
          },
          {
            "q": "Simplify F = AB + A'C + BC.",
            "options": [
              "AB + BC",
              "A + C",
              "A'C + BC",
              "AB + A'C"
            ],
            "correct": 3
          },
          {
            "q": "Σm(1,3,5,7) for variables A, B, C simplifies to:",
            "options": [
              "A'",
              "C",
              "B",
              "A"
            ],
            "correct": 1
          },
          {
            "q": "The canonical SOP of F = A + B' (variables A, B) is:",
            "options": [
              "Σm(0,2,3)",
              "Σm(0,1,3)",
              "Σm(0,1,2)",
              "Σm(1,2,3)"
            ],
            "correct": 0
          },
          {
            "q": "K-map: F(A,B,C,D) = Σm(0,2,8,10) simplifies to:",
            "options": [
              "BD",
              "A'C'",
              "B'D'",
              "B'C'"
            ],
            "correct": 2
          },
          {
            "q": "F(A,B,C,D) = Σm(0,1,4,5,8,9) + d(12,13). The minimal SOP is:",
            "options": [
              "A'C'",
              "C'",
              "C'D'",
              "B'C'"
            ],
            "correct": 1
          },
          {
            "q": "A prime implicant that covers at least one minterm not covered by any other prime implicant is called:",
            "options": [
              "Essential prime implicant",
              "Redundant implicant",
              "Canonical implicant",
              "Don't-care implicant"
            ],
            "correct": 0
          },
          {
            "q": "For Y = AB + A'C, which hazard exists and which term removes it?",
            "options": [
              "Static-0 hazard; add AC",
              "No hazard exists",
              "Dynamic hazard; add B'C",
              "Static-1 hazard; add BC"
            ],
            "correct": 3
          },
          {
            "q": "Static-0 hazards are typically found in:",
            "options": [
              "Only XOR gates",
              "Only sequential circuits",
              "Two-level SOP (AND–OR) circuits",
              "Two-level POS (OR–AND) circuits"
            ],
            "correct": 3
          }
        ]
      },
      {
        "name": "Combinational Logic Building Blocks",
        "questions": [
          {
            "q": "The Carry output of a half adder is:",
            "options": [
              "A⊕B",
              "A·B",
              "A+B",
              "(A·B)'"
            ],
            "correct": 1
          },
          {
            "q": "Number of select lines required for a 64:1 multiplexer:",
            "options": [
              "6",
              "8",
              "4",
              "5"
            ],
            "correct": 0
          },
          {
            "q": "A full adder has A = 1, B = 1, Cin = 1. Its outputs are:",
            "options": [
              "Sum = 0, Cout = 1",
              "Sum = 1, Cout = 0",
              "Sum = 1, Cout = 1",
              "Sum = 0, Cout = 0"
            ],
            "correct": 2
          },
          {
            "q": "A 4:1 MUX has S1S0 = 10 and inputs I0 = 0, I1 = 1, I2 = 1, I3 = 0. The output is:",
            "options": [
              "1",
              "High-Z",
              "Cannot be determined",
              "0"
            ],
            "correct": 0
          },
          {
            "q": "The Difference output of a full subtractor is:",
            "options": [
              "A'B + Bin",
              "(A⊕B)·Bin",
              "A·B·Bin",
              "A⊕B⊕Bin"
            ],
            "correct": 3
          },
          {
            "q": "How many 2-to-4 decoders (with enable) are needed to build a 4-to-16 decoder?",
            "options": [
              "8",
              "5",
              "6",
              "4"
            ],
            "correct": 3
          },
          {
            "q": "Minimum number of 2:1 MUXes needed to build a 16:1 MUX:",
            "options": [
              "16",
              "8",
              "15",
              "31"
            ],
            "correct": 2
          },
          {
            "q": "Any 3-variable Boolean function can be implemented with a single 4:1 MUX plus at most:",
            "options": [
              "no extra gate is ever needed",
              "one inverter",
              "one AND gate",
              "one OR gate"
            ],
            "correct": 1
          },
          {
            "q": "In an 8-bit ripple-carry adder each full adder has 5 ns carry-in→carry-out delay and 8 ns carry-in→sum delay. Worst-case addition time is:",
            "options": [
              "43 ns",
              "48 ns",
              "64 ns",
              "40 ns"
            ],
            "correct": 2
          },
          {
            "q": "In a Carry Look-Ahead adder, the generate and propagate functions are:",
            "options": [
              "Gi = AiBi', Pi = Ai'Bi",
              "Gi = Ai+Bi, Pi = AiBi",
              "Gi = AiBi, Pi = Ai⊕Bi",
              "Gi = Ai⊕Bi, Pi = AiBi"
            ],
            "correct": 2
          },
          {
            "q": "In a CLA adder, the carry Ci+1 equals:",
            "options": [
              "Pi + Gi·Ci",
              "Gi·Pi + Ci",
              "Gi ⊕ Pi ⊕ Ci",
              "Gi + Pi·Ci"
            ],
            "correct": 3
          },
          {
            "q": "A 4-to-2 priority encoder (D3 highest priority) has D3 = 0, D2 = 1, D1 = 1, D0 = 0. The output is:",
            "options": [
              "00",
              "11",
              "01",
              "10"
            ],
            "correct": 3
          },
          {
            "q": "To realise F = Σm(1,2,4,7) with an active-LOW output 3-to-8 decoder you need:",
            "options": [
              "a 4-input NOR gate",
              "a 4-input NAND gate",
              "a 4-input OR gate",
              "a 4-input AND gate"
            ],
            "correct": 1
          },
          {
            "q": "For a 1-bit magnitude comparator, the output 'A > B' is:",
            "options": [
              "A·B'",
              "A'·B",
              "A⊕B",
              "(A⊕B)'"
            ],
            "correct": 0
          }
        ]
      },
      {
        "name": "Sequential Circuits & State Machines",
        "questions": [
          {
            "q": "Which statement is correct?",
            "options": [
              "Latches are edge-triggered; flip-flops are level-sensitive",
              "Both are level-sensitive",
              "Latches are level-sensitive; flip-flops are edge-triggered",
              "Both are edge-triggered"
            ],
            "correct": 2
          },
          {
            "q": "A JK flip-flop with Q = 0 has J = 1, K = 1. Q after the next clock edge is:",
            "options": [
              "No change",
              "0",
              "Undefined",
              "1"
            ],
            "correct": 3
          },
          {
            "q": "Characteristic equation of a D flip-flop:",
            "options": [
              "Qnext = D",
              "Qnext = D·Q",
              "Qnext = D⊕Q",
              "Qnext = D'"
            ],
            "correct": 0
          },
          {
            "q": "Characteristic equation of a T flip-flop:",
            "options": [
              "Qnext = T'",
              "Qnext = T⊕Q",
              "Qnext = T + Q",
              "Qnext = T·Q"
            ],
            "correct": 1
          },
          {
            "q": "Race-around condition occurs in a JK flip-flop when:",
            "options": [
              "J = 0, K = 1 for a long time",
              "the clock frequency is very low",
              "J = K = 1 and the clock pulse is wider than the propagation delay",
              "J = K = 0 and the clock is high"
            ],
            "correct": 2
          },
          {
            "q": "To convert a JK flip-flop into a T flip-flop:",
            "options": [
              "J = K = T'",
              "J = T, K = T'",
              "J = 1, K = T",
              "J = K = T"
            ],
            "correct": 3
          },
          {
            "q": "To convert an SR flip-flop into a D flip-flop:",
            "options": [
              "S = R = D'",
              "S = D, R = D'",
              "S = D', R = D",
              "S = R = D"
            ],
            "correct": 1
          },
          {
            "q": "A 4-bit ripple counter is clocked at 16 MHz. The frequency at the Q3 output is:",
            "options": [
              "1 MHz",
              "4 MHz",
              "2 MHz",
              "8 MHz"
            ],
            "correct": 0
          },
          {
            "q": "Minimum number of flip-flops needed for a MOD-12 counter:",
            "options": [
              "3",
              "6",
              "4",
              "12"
            ],
            "correct": 2
          },
          {
            "q": "Number of unused states in an N-bit Johnson counter:",
            "options": [
              "2^N − 2N",
              "N! − 2N",
              "2^N − N",
              "2^N − (N+1)"
            ],
            "correct": 0
          },
          {
            "q": "Minimum states needed for an overlapping 1011 sequence detector (Mealy):",
            "options": [
              "3",
              "6",
              "5",
              "4"
            ],
            "correct": 3
          },
          {
            "q": "An overlapping 1011 detector receives the stream 1011011. It asserts its output:",
            "options": [
              "0 times",
              "2 times",
              "3 times",
              "1 time"
            ],
            "correct": 1
          },
          {
            "q": "Compared with a Moore machine, a Mealy machine:",
            "options": [
              "cannot detect sequences",
              "has outputs that depend only on the present state",
              "has outputs that depend on state and input, often needing fewer states",
              "is always slower"
            ],
            "correct": 2
          },
          {
            "q": "Async FIFO: writer at 100 MHz, reader at 80 MHz, burst of 100 back-to-back words. Minimum FIFO depth:",
            "options": [
              "100",
              "80",
              "25",
              "20"
            ],
            "correct": 3
          }
        ]
      },
      {
        "name": "Static Timing Analysis (STA)",
        "questions": [
          {
            "q": "Setup time is the minimum time data must be stable:",
            "options": [
              "after the active clock edge",
              "after Q changes",
              "before the active clock edge",
              "during the whole clock-high phase"
            ],
            "correct": 2
          },
          {
            "q": "Hold time is the minimum time data must remain stable:",
            "options": [
              "only while the clock is low",
              "after the active clock edge",
              "until the next clock edge",
              "before the active clock edge"
            ],
            "correct": 1
          },
          {
            "q": "Clock-to-Q delay (Tcq) is measured from:",
            "options": [
              "the active clock edge to valid Q output",
              "Q change to the next clock edge",
              "setup time to hold time",
              "data change to Q change"
            ],
            "correct": 0
          },
          {
            "q": "To avoid metastability, data must:",
            "options": [
              "toggle at twice the clock rate",
              "arrive after the clock edge only",
              "change exactly on the clock edge",
              "be stable for Tsetup before and Thold after the clock edge"
            ],
            "correct": 3
          },
          {
            "q": "Tsetup = 2 ns, Tcq = 3 ns, Tcomb = 5 ns (flop-to-flop). Maximum clock frequency:",
            "options": [
              "500 MHz",
              "1 GHz",
              "100 MHz",
              "200 MHz"
            ],
            "correct": 2
          },
          {
            "q": "Tcq = 1.5 ns, Tcomb = 6 ns, Tsetup = 0.5 ns. Maximum clock frequency:",
            "options": [
              "100 MHz",
              "125 MHz",
              "150 MHz",
              "200 MHz"
            ],
            "correct": 1
          },
          {
            "q": "Tcq = 3 ns, Thold = 1 ns, Tcomb_min = 0.5 ns, zero skew. Hold slack:",
            "options": [
              "+2.5 ns",
              "−0.5 ns",
              "−2.5 ns",
              "+0.5 ns"
            ],
            "correct": 0
          },
          {
            "q": "Tclk = 10 ns, Tcq = 2 ns, Tcomb = 4 ns, Tsetup = 1.5 ns. Setup slack:",
            "options": [
              "+2.5 ns",
              "+4 ns",
              "−2.5 ns",
              "+1 ns"
            ],
            "correct": 0
          },
          {
            "q": "Positive skew (capture clock arrives later than launch clock):",
            "options": [
              "hurts setup, helps hold",
              "helps setup, hurts hold",
              "hurts both",
              "helps both"
            ],
            "correct": 1
          },
          {
            "q": "Which action fixes a hold-time violation?",
            "options": [
              "Increase the clock frequency",
              "Reduce the clock frequency",
              "Insert delay buffers in the data path",
              "Increase only the supply voltage"
            ],
            "correct": 2
          },
          {
            "q": "Clock jitter primarily:",
            "options": [
              "increases the hold time of flip-flops",
              "changes the logic function",
              "affects only power",
              "reduces the effective timing margin (setup slack)"
            ],
            "correct": 3
          },
          {
            "q": "Tcq = 2 ns, Tcomb = 6 ns, Tsetup = 2 ns, capture clock later by 1 ns (positive skew). Minimum clock period:",
            "options": [
              "9 ns",
              "8 ns",
              "11 ns",
              "10 ns"
            ],
            "correct": 2
          },
          {
            "q": "Tcq = 2 ns, Tcomb_min = 0.5 ns, Thold = 1 ns, capture clock later by 2 ns. Hold slack:",
            "options": [
              "+0.5 ns",
              "−0.5 ns",
              "+1.5 ns",
              "−1.5 ns"
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  {
    "id": "electronics",
    "title": "Basic Electronics & Circuit Analysis",
    "tagline": "Current flows where resistance is lowest. So does progress.",
    "weight": "10–15% Weightage",
    "sections": [
      {
        "name": "Circuit Analysis & Network Theorems",
        "questions": [
          {
            "q": "Kirchhoff's Voltage Law (KVL) states that:",
            "options": [
              "the algebraic sum of currents at a node is zero",
              "voltage equals current times resistance in every branch",
              "the algebraic sum of voltages around a closed loop is zero",
              "power in equals power out only in series circuits"
            ],
            "correct": 2
          },
          {
            "q": "6 Ω and 3 Ω resistors connected in parallel give:",
            "options": [
              "9 Ω",
              "18 Ω",
              "4.5 Ω",
              "2 Ω"
            ],
            "correct": 2
          },
          {
            "q": "12 V is applied across 4 kΩ and 8 kΩ in series. The voltage across the 8 kΩ resistor is:",
            "options": [
              "12 V",
              "8 V",
              "4 V",
              "6 V"
            ],
            "correct": 1
          },
          {
            "q": "A circuit has 6 branches and 4 nodes. The number of independent mesh equations is:",
            "options": [
              "2",
              "4",
              "6",
              "3"
            ],
            "correct": 3
          },
          {
            "q": "Number of independent KCL equations for a circuit with n nodes:",
            "options": [
              "2n",
              "n + 1",
              "n − 1",
              "n"
            ],
            "correct": 2
          },
          {
            "q": "A 12 V source, a 6 Ω series resistor and a 3 Ω resistor across terminals a–b. The Thevenin equivalent at a–b is:",
            "options": [
              "Vth = 4 V, Rth = 2 Ω",
              "Vth = 12 V, Rth = 9 Ω",
              "Vth = 8 V, Rth = 2 Ω",
              "Vth = 4 V, Rth = 9 Ω"
            ],
            "correct": 0
          },
          {
            "q": "For a Thevenin source Vth = 4 V, Rth = 2 Ω, the maximum power delivered to a load is:",
            "options": [
              "1 W",
              "4 W",
              "8 W",
              "2 W"
            ],
            "correct": 3
          },
          {
            "q": "The Norton equivalent of Vth = 4 V, Rth = 2 Ω is:",
            "options": [
              "8 A in parallel with 2 Ω",
              "0.5 A in parallel with 2 Ω",
              "2 A current source in parallel with 2 Ω",
              "2 A in parallel with 8 Ω"
            ],
            "correct": 2
          },
          {
            "q": "R = 10 kΩ and C = 1 nF. The time constant τ = RC is:",
            "options": [
              "10 µs",
              "10 ms",
              "1 µs",
              "100 µs"
            ],
            "correct": 0
          },
          {
            "q": "A capacitor charges from 0 V towards 5 V through an RC network. At t = τ its voltage is about:",
            "options": [
              "2.5 V",
              "3.16 V",
              "4.32 V",
              "5 V"
            ],
            "correct": 1
          },
          {
            "q": "The 10%–90% rise time of a first-order RC circuit is approximately:",
            "options": [
              "RC",
              "4.6 RC",
              "2.2 RC",
              "0.69 RC"
            ],
            "correct": 2
          },
          {
            "q": "R = 10 kΩ and C = 100 fF. The 50% propagation delay (0.69 RC) is about:",
            "options": [
              "0.69 ns",
              "1 ns",
              "2.2 ns",
              "6.9 ns"
            ],
            "correct": 0
          }
        ]
      },
      {
        "name": "MOSFET Physics & CMOS Design",
        "questions": [
          {
            "q": "An NMOS transistor conducts (channel forms) when:",
            "options": [
              "VDS < 0",
              "VGS > Vth",
              "VGS = 0",
              "VGS < Vth"
            ],
            "correct": 1
          },
          {
            "q": "In complementary CMOS logic, the pull-up network uses:",
            "options": [
              "resistors",
              "NMOS and PMOS in series only",
              "NMOS transistors",
              "PMOS transistors"
            ],
            "correct": 3
          },
          {
            "q": "A CMOS inverter has input = logic 1. The output and the conducting device are:",
            "options": [
              "1, NMOS ON",
              "0, NMOS ON",
              "0, PMOS ON",
              "1, PMOS ON"
            ],
            "correct": 1
          },
          {
            "q": "In a 2-input CMOS NAND gate:",
            "options": [
              "NMOS are in parallel, PMOS in series",
              "all transistors are in series",
              "NMOS are in series, PMOS in parallel",
              "all transistors are in parallel"
            ],
            "correct": 2
          },
          {
            "q": "Number of transistors in a 3-input CMOS NAND gate:",
            "options": [
              "6",
              "12",
              "8",
              "3"
            ],
            "correct": 0
          },
          {
            "q": "An NMOS (with VGS > Vth) is in saturation when:",
            "options": [
              "VGS < Vth",
              "VDS < VGS − Vth",
              "VDS = 0",
              "VDS ≥ VGS − Vth"
            ],
            "correct": 3
          },
          {
            "q": "Body effect: the Vth of an NMOS ______ as the source-to-body reverse bias VSB increases.",
            "options": [
              "increases",
              "decreases",
              "becomes negative",
              "stays the same"
            ],
            "correct": 0
          },
          {
            "q": "Channel-length modulation (λ) causes:",
            "options": [
              "Vth to change with temperature",
              "ID to rise slightly with VDS in saturation",
              "gate current to flow",
              "ID to fall to zero"
            ],
            "correct": 1
          },
          {
            "q": "μnCox = 100 µA/V², W/L = 10, VGS = 1.5 V, Vth = 0.5 V, λ = 0. The saturation current is:",
            "options": [
              "50 µA",
              "250 µA",
              "500 µA",
              "1 mA"
            ],
            "correct": 2
          },
          {
            "q": "CL = 10 fF, VDD = 1 V, f = 1 GHz, α = 0.5. Dynamic power P = αCLVDD²f is:",
            "options": [
              "5 nW",
              "10 µW",
              "50 µW",
              "5 µW"
            ],
            "correct": 3
          },
          {
            "q": "Halving VDD (everything else fixed) changes dynamic power by a factor of:",
            "options": [
              "¼",
              "2",
              "no change",
              "½"
            ],
            "correct": 0
          },
          {
            "q": "For equal rise and fall delays in an inverter with μn = 2.5 μp, Wp/Wn should be:",
            "options": [
              "0.4",
              "2.5",
              "1",
              "5"
            ],
            "correct": 1
          },
          {
            "q": "An inverter uses Wn = 1, Wp = 2. To give the same drive, a 2-input NAND needs:",
            "options": [
              "NMOS = 1, PMOS = 4",
              "NMOS = 1, PMOS = 2",
              "NMOS = 4, PMOS = 1",
              "NMOS = 2, PMOS = 2"
            ],
            "correct": 3
          },
          {
            "q": "Increasing Wp/Wn of a CMOS inverter shifts the switching threshold Vm:",
            "options": [
              "to exactly zero",
              "towards GND",
              "towards VDD",
              "not at all"
            ],
            "correct": 2
          },
          {
            "q": "The high noise margin NMH is defined as:",
            "options": [
              "VOH − VIH",
              "VIH − VIL",
              "VOH − VOL",
              "VIL − VOL"
            ],
            "correct": 0
          },
          {
            "q": "Lowering the threshold voltage Vth makes subthreshold leakage:",
            "options": [
              "drop to zero",
              "increase exponentially",
              "stay constant",
              "decrease"
            ],
            "correct": 1
          },
          {
            "q": "Latch-up in CMOS is caused by:",
            "options": [
              "gate-oxide breakdown",
              "a very high Vth",
              "too many metal layers",
              "a parasitic SCR (pnpn structure) turning on"
            ],
            "correct": 3
          },
          {
            "q": "Latch-up is prevented by using:",
            "options": [
              "a thicker gate oxide",
              "larger W/L ratios",
              "well taps and guard rings",
              "a higher VDD"
            ],
            "correct": 2
          },
          {
            "q": "A ring oscillator has 5 inverters, each with 100 ps delay. Its frequency is:",
            "options": [
              "5 GHz",
              "2 GHz",
              "1 GHz",
              "500 MHz"
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  {
    "id": "c-programming",
    "title": "C Programming",
    "tagline": "Bits are the language of hardware. Learn to speak them fluently.",
    "weight": "High Weightage",
    "sections": [
      {
        "name": "Core C Concepts",
        "questions": [
          {
            "q": "What is the output?\n\nint x = 5;\nprintf(\"%d\", x++);",
            "options": [
              "5",
              "4",
              "6",
              "Undefined"
            ],
            "correct": 0
          },
          {
            "q": "What is printed?\n\nint x = 10;\nif (x = 20) printf(\"Yes\");\nelse printf(\"No\");",
            "options": [
              "Compilation error",
              "Yes",
              "Runtime error",
              "No"
            ],
            "correct": 1
          },
          {
            "q": "What is the output?\n\nprintf(\"%d\", 2 + 3 * 4);",
            "options": [
              "20",
              "24",
              "10",
              "14"
            ],
            "correct": 3
          },
          {
            "q": "The value of sizeof(char) in C is always:",
            "options": [
              "2",
              "machine dependent",
              "4",
              "1"
            ],
            "correct": 3
          },
          {
            "q": "What is the output?\n\nint i = 0;\nfor (; i < 5; i++);\nprintf(\"%d\", i);",
            "options": [
              "5",
              "01234",
              "0",
              "4"
            ],
            "correct": 0
          },
          {
            "q": "What is the output?\n\nunsigned char c = 255;\nc++;\nprintf(\"%d\", c);",
            "options": [
              "255",
              "0",
              "256",
              "−1"
            ],
            "correct": 1
          },
          {
            "q": "What is the output?\n\nprintf(\"%d\", -7 % 3);",
            "options": [
              "−2",
              "1",
              "−1",
              "2"
            ],
            "correct": 2
          },
          {
            "q": "What is printed?\n\nint x = 2;\nswitch (x) {\n case 1: printf(\"A\");\n case 2: printf(\"B\");\n case 3: printf(\"C\"); break;\n default: printf(\"D\");\n}",
            "options": [
              "BCD",
              "C",
              "BC",
              "B"
            ],
            "correct": 2
          },
          {
            "q": "What does fun(4) return?\n\nint fun(int n) {\n if (n == 0) return 1;\n return n * fun(n - 1);\n}",
            "options": [
              "10",
              "24",
              "12",
              "16"
            ],
            "correct": 1
          },
          {
            "q": "What is the output?\n\nprintf(\"%d\", 5 > 3 > 1);",
            "options": [
              "1",
              "Compilation error",
              "5",
              "0"
            ],
            "correct": 3
          },
          {
            "q": "What is the output?\n\nchar c = 'A' + 2;\nprintf(\"%c %d\", c, c);",
            "options": [
              "C 67",
              "B 66",
              "A 67",
              "C 65"
            ],
            "correct": 0
          }
        ]
      },
      {
        "name": "Bitwise Operations",
        "questions": [
          {
            "q": "What is the value of 5 & 10 ?",
            "options": [
              "10",
              "15",
              "0",
              "5"
            ],
            "correct": 2
          },
          {
            "q": "What is the value of 8 >> 2 ?",
            "options": [
              "2",
              "4",
              "32",
              "16"
            ],
            "correct": 0
          },
          {
            "q": "What is the value of 6 ^ 3 ?",
            "options": [
              "7",
              "5",
              "3",
              "2"
            ],
            "correct": 1
          },
          {
            "q": "Which statement sets bit n of x?",
            "options": [
              "x &= (1 << n);",
              "x ^= ~(1 << n);",
              "x |= ~(1 << n);",
              "x |= (1 << n);"
            ],
            "correct": 3
          },
          {
            "q": "Which statement clears bit n of x?",
            "options": [
              "x &= ~(1 << n);",
              "x &= (1 << n);",
              "x |= ~(1 << n);",
              "x ^= (1 << n);"
            ],
            "correct": 0
          },
          {
            "q": "What is printed?\n\nunsigned char x = 0x0F;\nx &= ~(1 << 2);\nprintf(\"0x%02X\", x);",
            "options": [
              "0x0F",
              "0x0B",
              "0x03",
              "0x0D"
            ],
            "correct": 1
          },
          {
            "q": "What is the output?\n\nprintf(\"%d\", ~5);",
            "options": [
              "−5",
              "6",
              "250",
              "−6"
            ],
            "correct": 3
          },
          {
            "q": "Which expression is TRUE when n > 0 is a power of 2?",
            "options": [
              "(n ^ (n − 1)) == 0",
              "(n | (n − 1)) == 0",
              "(n & (n − 1)) == 0",
              "(n & (n + 1)) == 0"
            ],
            "correct": 2
          },
          {
            "q": "What does this loop compute?\n\nint count = 0;\nwhile (n) {\n n &= (n - 1);\n count++;\n}",
            "options": [
              "The number of set bits in n",
              "The 2's complement of n",
              "The bit-reversal of n",
              "log2(n)"
            ],
            "correct": 0
          },
          {
            "q": "What does this code do?\n\nx = x ^ y;\ny = x ^ y;\nx = x ^ y;",
            "options": [
              "Clears both variables",
              "Swaps x and y without a temporary",
              "Computes the average of x and y",
              "Causes overflow"
            ],
            "correct": 1
          },
          {
            "q": "Little-endian machine. What is printed?\n\nunsigned int x = 0x12345678;\nchar *c = (char *)&x;\nprintf(\"0x%x\", *c);",
            "options": [
              "0x34",
              "0x56",
              "0x78",
              "0x12"
            ],
            "correct": 2
          },
          {
            "q": "What is printed?\n\nunsigned char x = 0xA7;\nprintf(\"0x%X\", (x >> 4) & 0x0F);",
            "options": [
              "0x70",
              "0xA7",
              "0x7",
              "0xA"
            ],
            "correct": 3
          }
        ]
      },
      {
        "name": "Pointers & Memory Management",
        "questions": [
          {
            "q": "What is the output?\n\nint a[] = {10, 20, 30, 40};\nint *p = a;\nprintf(\"%d\", *(p + 2));",
            "options": [
              "20",
              "30",
              "Garbage value",
              "10"
            ],
            "correct": 1
          },
          {
            "q": "What is the output?\n\nchar *p = \"VEDA\";\nprintf(\"%c\", *(p + 2));",
            "options": [
              "D",
              "V",
              "A",
              "E"
            ],
            "correct": 0
          },
          {
            "q": "On a 32-bit system, sizeof(int *) is:",
            "options": [
              "8 bytes",
              "1 byte",
              "4 bytes",
              "2 bytes"
            ],
            "correct": 2
          },
          {
            "q": "int pointer p = 0x1000 and sizeof(int) = 4. The value of p + 3 is:",
            "options": [
              "0x1003",
              "0x1012",
              "0x1004",
              "0x100C"
            ],
            "correct": 3
          },
          {
            "q": "What is the output?\n\nint x = 5;\nint *p = &x;\nint **pp = &p;\nprintf(\"%d\", **pp);",
            "options": [
              "5",
              "The address of p",
              "The address of x",
              "Compilation error"
            ],
            "correct": 0
          },
          {
            "q": "What is the output?\n\nint a[] = {1, 2, 3, 4, 5};\nprintf(\"%d\", sizeof(a) / sizeof(a[0]));",
            "options": [
              "20",
              "1",
              "4",
              "5"
            ],
            "correct": 3
          },
          {
            "q": "calloc() differs from malloc() because calloc():",
            "options": [
              "never returns NULL",
              "zero-initialises the allocated memory",
              "allocates on the stack",
              "frees memory automatically"
            ],
            "correct": 1
          },
          {
            "q": "A memory leak occurs when:",
            "options": [
              "free() is called on a NULL pointer",
              "the stack overflows",
              "heap memory is allocated but never freed and its pointer is lost",
              "an array index is out of range"
            ],
            "correct": 2
          },
          {
            "q": "What is the output?\n\nint a[5] = {1, 2, 3, 4, 5};\nint *p1 = (int *)(&a + 1);\nint *p2 = (int *)(a + 1);\nprintf(\"%d, %d\", *(p1 - 1), *p2);",
            "options": [
              "5, 1",
              "Compilation error",
              "1, 2",
              "5, 2"
            ],
            "correct": 3
          },
          {
            "q": "Which declares fp as a pointer to a function taking int and returning void?",
            "options": [
              "void *fp(int);",
              "void fp(int *);",
              "void (*fp)(int);",
              "(void *) fp(int);"
            ],
            "correct": 2
          },
          {
            "q": "Why is this function a bug?\n\nint *getPtr() {\n int x = 100;\n return &x;\n}",
            "options": [
              "x is converted to float",
              "It returns the address of a stack variable that no longer exists",
              "There is a syntax error",
              "The pointer types mismatch"
            ],
            "correct": 1
          },
          {
            "q": "realloc(NULL, 20) behaves like:",
            "options": [
              "malloc(20)",
              "a compile error",
              "free(NULL)",
              "calloc(0, 20)"
            ],
            "correct": 0
          },
          {
            "q": "What is the output?\n\nint a[] = {10, 20, 30};\nint *p = a;\n(*p)++;\nprintf(\"%d %d\", a[0], *p);",
            "options": [
              "11 20",
              "10 20",
              "11 11",
              "10 10"
            ],
            "correct": 2
          }
        ]
      },
      {
        "name": "Advanced Topics & Hardware Modifiers",
        "questions": [
          {
            "q": "A static local variable:",
            "options": [
              "lives only in CPU registers",
              "retains its value between function calls",
              "is visible to all files",
              "is destroyed when the function exits"
            ],
            "correct": 1
          },
          {
            "q": "volatile is used on hardware registers to:",
            "options": [
              "stop the compiler from optimising away reads and writes",
              "store them in flash",
              "speed up access",
              "make them read-only"
            ],
            "correct": 0
          },
          {
            "q": "'int *const p' means:",
            "options": [
              "p is a function pointer",
              "p points to constant data; p can change",
              "both p and the data are fixed",
              "p is a constant pointer; the data it points to can change"
            ],
            "correct": 3
          },
          {
            "q": "'extern int x;' means:",
            "options": [
              "x is constant",
              "x is a static local",
              "x is defined in another file",
              "x is a new private copy"
            ],
            "correct": 2
          },
          {
            "q": "With 4-byte alignment, sizeof(struct T) is:\n\nstruct T {\n char a;\n int b;\n char c;\n};",
            "options": [
              "8",
              "12",
              "6",
              "16"
            ],
            "correct": 1
          },
          {
            "q": "With 4-byte alignment, sizeof(struct T) is:\n\nstruct T {\n int b;\n char a;\n char c;\n};",
            "options": [
              "8",
              "6",
              "12",
              "4"
            ],
            "correct": 0
          },
          {
            "q": "With an 8-byte double, sizeof(union U) is:\n\nunion U {\n int i;\n char c;\n double d;\n};",
            "options": [
              "13",
              "16",
              "4",
              "8"
            ],
            "correct": 3
          },
          {
            "q": "A bit-field declared as 'unsigned int a : 3;' can store values from:",
            "options": [
              "0 to 8",
              "0 to 3",
              "0 to 7",
              "−4 to 3"
            ],
            "correct": 2
          },
          {
            "q": "What is the value of b?\n\n#define SQUARE(x) x * x\nint b = SQUARE(3 + 2);",
            "options": [
              "11",
              "15",
              "25",
              "9"
            ],
            "correct": 0
          },
          {
            "q": "#ifndef / #define / #endif in a header file are used to:",
            "options": [
              "change endianness",
              "prevent multiple inclusion",
              "allocate memory",
              "declare variables"
            ],
            "correct": 1
          },
          {
            "q": "Why write a macro as ((a) > (b) ? (a) : (b)) with extra parentheses?",
            "options": [
              "To add type safety",
              "To make it run faster",
              "To use less memory",
              "To avoid operator-precedence errors after expansion"
            ],
            "correct": 3
          },
          {
            "q": "A global variable declared static in a .c file is:",
            "options": [
              "visible only inside that file (internal linkage)",
              "stored on the stack",
              "constant by default",
              "visible to every file"
            ],
            "correct": 0
          },
          {
            "q": "Little-endian machine. What is printed?\n\nunion {\n int i;\n unsigned char c[4];\n} u;\nu.i = 0x01020304;\nprintf(\"%d\", u.c[0]);",
            "options": [
              "2",
              "3",
              "1",
              "4"
            ],
            "correct": 3
          },
          {
            "q": "What happens when this code is compiled?\n\nint x = 1;\nconst int *p = &x;\n*p = 5;",
            "options": [
              "Only a warning; x becomes 5",
              "x becomes 5",
              "Compilation error (cannot modify through a pointer to const)",
              "Runtime crash"
            ],
            "correct": 2
          }
        ]
      }
    ]
  },
  {
    "id": "microprocessors",
    "title": "Microprocessors & Computer Architecture",
    "tagline": "Behind every smart device is a processor fetching, decoding, executing.",
    "weight": "Moderate Weightage",
    "sections": [
      {
        "name": "8086 Architecture",
        "questions": [
          {
            "q": "Maximum memory the 8086 can address:",
            "options": [
              "64 KB",
              "1 MB",
              "4 GB",
              "16 MB"
            ],
            "correct": 1
          },
          {
            "q": "Physical address generation in the 8086:",
            "options": [
              "(Segment × 10) + Offset",
              "Segment × Offset",
              "(Segment × 16) + Offset",
              "Segment + Offset"
            ],
            "correct": 2
          },
          {
            "q": "Number of segment registers in the 8086:",
            "options": [
              "4",
              "3",
              "2",
              "6"
            ],
            "correct": 0
          },
          {
            "q": "CS = 2000H and IP = 0100H. The physical address is:",
            "options": [
              "20010H",
              "22000H",
              "2100H",
              "20100H"
            ],
            "correct": 3
          },
          {
            "q": "DS = 1234H and offset = 0010H. The physical address is:",
            "options": [
              "12344H",
              "12350H",
              "13234H",
              "1244H"
            ],
            "correct": 1
          },
          {
            "q": "SS = 5000H and SP = FFFEH. The stack address is:",
            "options": [
              "5000EH",
              "4FFFEH",
              "5FFFEH",
              "50FFEH"
            ],
            "correct": 2
          },
          {
            "q": "Maximum size of one memory segment in the 8086:",
            "options": [
              "1 MB",
              "64 KB",
              "256 KB",
              "16 KB"
            ],
            "correct": 1
          },
          {
            "q": "Which unit fetches instructions and holds the 6-byte prefetch queue?",
            "options": [
              "Execution Unit (EU)",
              "ALU",
              "Flag register",
              "Bus Interface Unit (BIU)"
            ],
            "correct": 3
          },
          {
            "q": "Which seg:offset pair gives the same physical address as 1000:2000 ?",
            "options": [
              "1200:0000",
              "1000:0200",
              "1002:0000",
              "2000:1000"
            ],
            "correct": 0
          },
          {
            "q": "By default, BP-based addressing uses which segment register?",
            "options": [
              "DS",
              "SS",
              "ES",
              "CS"
            ],
            "correct": 1
          },
          {
            "q": "PUSH and POP form the stack address using:",
            "options": [
              "ES:DI",
              "DS:SI",
              "CS:IP",
              "SS:SP"
            ],
            "correct": 3
          },
          {
            "q": "The BIU/EU split in the 8086 gives:",
            "options": [
              "no need for segment registers",
              "double the clock speed",
              "overlap of instruction fetch and execution (pipelining)",
              "removal of interrupts"
            ],
            "correct": 2
          }
        ]
      },
      {
        "name": "Instructions & Interfacing",
        "questions": [
          {
            "q": "MOV AX, 1234H uses which addressing mode?",
            "options": [
              "Immediate",
              "Register",
              "Register indirect",
              "Direct"
            ],
            "correct": 0
          },
          {
            "q": "MOV AX, [BX] uses which addressing mode?",
            "options": [
              "Direct",
              "Immediate",
              "Base-indexed",
              "Register indirect"
            ],
            "correct": 3
          },
          {
            "q": "Number of interrupt types (vectors) in the 8086:",
            "options": [
              "64",
              "512",
              "256",
              "128"
            ],
            "correct": 2
          },
          {
            "q": "The Interrupt Vector Table occupies:",
            "options": [
              "the first 1 KB of memory (00000H–003FFH)",
              "a full 64 KB segment",
              "the first 256 bytes",
              "the last 1 KB of memory"
            ],
            "correct": 0
          },
          {
            "q": "The vector address for INT 21H is:",
            "options": [
              "21H",
              "84H",
              "0A4H",
              "42H"
            ],
            "correct": 1
          },
          {
            "q": "Which hardware interrupt pin cannot be masked?",
            "options": [
              "NMI",
              "INTA",
              "INTR",
              "TEST"
            ],
            "correct": 0
          },
          {
            "q": "MOV AX, [BX+SI] uses which addressing mode?",
            "options": [
              "Register",
              "Base-indexed",
              "Immediate",
              "Direct"
            ],
            "correct": 1
          },
          {
            "q": "Which bus is bidirectional in a microprocessor system?",
            "options": [
              "Address bus",
              "Both address and data bus",
              "Neither of them",
              "Data bus"
            ],
            "correct": 3
          },
          {
            "q": "Isolated (I/O-mapped) I/O uses which instructions?",
            "options": [
              "MOV only",
              "LOAD and STORE",
              "IN and OUT",
              "PUSH and POP"
            ],
            "correct": 2
          },
          {
            "q": "A disadvantage of memory-mapped I/O:",
            "options": [
              "It needs special IN/OUT instructions",
              "It cannot use MOV",
              "It consumes part of the memory address space",
              "It is limited to 256 ports"
            ],
            "correct": 2
          },
          {
            "q": "Each Interrupt Vector Table entry stores:",
            "options": [
              "the flags (2 bytes)",
              "SS and SP (4 bytes)",
              "only IP (2 bytes)",
              "IP and CS (4 bytes)"
            ],
            "correct": 3
          },
          {
            "q": "DMA allows an I/O device to:",
            "options": [
              "move data to or from memory without the CPU handling each byte",
              "increase the clock frequency",
              "interrupt the CPU for every byte",
              "replace the ALU"
            ],
            "correct": 0
          },
          {
            "q": "The 8086 isolated I/O address space provides:",
            "options": [
              "256 ports",
              "64K ports",
              "1M ports",
              "1K ports"
            ],
            "correct": 1
          }
        ]
      }
    ]
  },
  {
    "id": "aptitude",
    "title": "General & Mathematical Aptitude",
    "tagline": "Speed comes from practice, accuracy comes from patience.",
    "weight": "Score Booster",
    "sections": [
      {
        "name": "Quantitative Aptitude",
        "questions": [
          {
            "q": "Simple interest on ₹5,000 at 8% p.a. for 3 years is:",
            "options": [
              "₹1,500",
              "₹1,200",
              "₹1,400",
              "₹1,000"
            ],
            "correct": 1
          },
          {
            "q": "Divide 120 in the ratio 2 : 3. The larger part is:",
            "options": [
              "72",
              "48",
              "60",
              "80"
            ],
            "correct": 0
          },
          {
            "q": "In how many ways can 3 students be chosen from 10?",
            "options": [
              "720",
              "60",
              "120",
              "30"
            ],
            "correct": 2
          },
          {
            "q": "An item costs ₹10,000 plus ₹500 repairs and is sold at 20% profit. The selling price is:",
            "options": [
              "₹13,000",
              "₹12,000",
              "₹12,500",
              "₹12,600"
            ],
            "correct": 3
          },
          {
            "q": "Sugar price rises by 20%. Consumption must fall by what percent to keep expenditure the same?",
            "options": [
              "20%",
              "15%",
              "16.67%",
              "25%"
            ],
            "correct": 2
          },
          {
            "q": "The average of 5 numbers is 40. After removing one number the average of the rest is 42. The removed number is:",
            "options": [
              "32",
              "34",
              "30",
              "38"
            ],
            "correct": 0
          },
          {
            "q": "A completes a job in 6 days and B in 12 days. Working together they finish in:",
            "options": [
              "3 days",
              "4.5 days",
              "5 days",
              "4 days"
            ],
            "correct": 3
          },
          {
            "q": "A 180 m train crosses a 300 m platform in 30 s. Its speed is:",
            "options": [
              "60 km/h",
              "57.6 km/h",
              "54 km/h",
              "48 km/h"
            ],
            "correct": 1
          },
          {
            "q": "Compound interest on ₹1,000 at 10% p.a. for 2 years:",
            "options": [
              "₹100",
              "₹220",
              "₹200",
              "₹210"
            ],
            "correct": 3
          },
          {
            "q": "If x is 80% of y, then y is what percent of 2x?",
            "options": [
              "50%",
              "62.5%",
              "80%",
              "125%"
            ],
            "correct": 1
          },
          {
            "q": "A bag has 3 red, 4 blue and 5 green balls. P(ball is not green) =",
            "options": [
              "7/12",
              "1/2",
              "1/3",
              "5/12"
            ],
            "correct": 0
          },
          {
            "q": "Pipes A and B fill a tank in 10 h and 15 h; pipe C empties it in 20 h. All open together, the tank fills in:",
            "options": [
              "12 h",
              "6.2 h",
              "about 8.57 h",
              "7.5 h"
            ],
            "correct": 2
          },
          {
            "q": "Arrangements of the letters of DIGITAL with all vowels together:",
            "options": [
              "720",
              "1080",
              "360",
              "2160"
            ],
            "correct": 2
          },
          {
            "q": "Three cards drawn from a 52-card deck are all Aces. The probability is:",
            "options": [
              "1/22100",
              "4/52",
              "1/13",
              "1/5525"
            ],
            "correct": 3
          },
          {
            "q": "In a 100 m race A beats B by 10 m and B beats C by 10 m. A beats C by:",
            "options": [
              "19 m",
              "21 m",
              "20 m",
              "18 m"
            ],
            "correct": 0
          },
          {
            "q": "In what ratio (30% : 50%) must two alcohol solutions be mixed to get a 45% mixture?",
            "options": [
              "3 : 1",
              "1 : 3",
              "2 : 3",
              "1 : 2"
            ],
            "correct": 1
          },
          {
            "q": "Two runners on a 400 m circular track run in opposite directions at 6 m/s and 4 m/s. They first meet after:",
            "options": [
              "100 s",
              "66.6 s",
              "40 s",
              "200 s"
            ],
            "correct": 2
          },
          {
            "q": "How many times do the hour and minute hands coincide in 24 hours?",
            "options": [
              "22",
              "20",
              "24",
              "44"
            ],
            "correct": 0
          },
          {
            "q": "The remainder when 2^100 is divided by 3 is:",
            "options": [
              "0",
              "1",
              "2",
              "4"
            ],
            "correct": 1
          },
          {
            "q": "Given log10 2 = 0.3010, the number of digits in 2^50 is:",
            "options": [
              "14",
              "15",
              "17",
              "16"
            ],
            "correct": 3
          },
          {
            "q": "A sum triples in 12 years at simple interest. In how many years does it become 5 times itself?",
            "options": [
              "20 years",
              "30 years",
              "24 years",
              "18 years"
            ],
            "correct": 2
          }
        ]
      },
      {
        "name": "Logical & Analytical Reasoning",
        "questions": [
          {
            "q": "Next term: 1, 4, 9, 16, ?",
            "options": [
              "25",
              "20",
              "24",
              "36"
            ],
            "correct": 0
          },
          {
            "q": "If LOGIC is coded as MPHJD, then CHIP is coded as:",
            "options": [
              "CIJQ",
              "DJIQ",
              "BGHO",
              "DIJQ"
            ],
            "correct": 3
          },
          {
            "q": "If A = 1, B = 2, … Z = 26, the value of DOG is:",
            "options": [
              "28",
              "26",
              "24",
              "30"
            ],
            "correct": 1
          },
          {
            "q": "In a row of 40 students Ravi is 12th from the left. His position from the right is:",
            "options": [
              "27th",
              "30th",
              "29th",
              "28th"
            ],
            "correct": 2
          },
          {
            "q": "Next term: 2, 6, 12, 20, 30, ?",
            "options": [
              "40",
              "44",
              "36",
              "42"
            ],
            "correct": 3
          },
          {
            "q": "Complete the pattern: AB, DE, HI, KL, ?",
            "options": [
              "MN",
              "OP",
              "PQ",
              "NO"
            ],
            "correct": 1
          },
          {
            "q": "Pointing to a girl, a boy says, \"She is the daughter of my grandfather's only son.\" The girl is his:",
            "options": [
              "Sister",
              "Mother",
              "Cousin",
              "Aunt"
            ],
            "correct": 0
          },
          {
            "q": "A is B's sister, C is B's mother, D is C's father, E is D's mother. How is A related to D?",
            "options": [
              "Daughter",
              "Grandmother",
              "Niece",
              "Granddaughter"
            ],
            "correct": 3
          },
          {
            "q": "Statements: All VEDA students are engineers. Some engineers are musicians.\nI. Some VEDA students are musicians. II. Some engineers are VEDA students.",
            "options": [
              "Neither follows",
              "Only I follows",
              "Only II follows",
              "Both follow"
            ],
            "correct": 2
          },
          {
            "q": "Find the odd one out: 27, 64, 100, 125",
            "options": [
              "64",
              "100",
              "125",
              "27"
            ],
            "correct": 1
          },
          {
            "q": "If 1 March is a Monday (non-leap year), 1 April is a:",
            "options": [
              "Thursday",
              "Friday",
              "Wednesday",
              "Tuesday"
            ],
            "correct": 0
          },
          {
            "q": "Next term: 3, 8, 15, 24, 35, ?",
            "options": [
              "46",
              "50",
              "48",
              "45"
            ],
            "correct": 2
          },
          {
            "q": "A man walks 5 m north, turns right, walks 5 m, turns right again and walks 5 m. His starting point is in which direction from him?",
            "options": [
              "South",
              "West",
              "East",
              "North"
            ],
            "correct": 1
          },
          {
            "q": "Rahul walks 10 m south, turns left, walks 15 m, turns left again and walks 10 m. He is now:",
            "options": [
              "25 m East of the start",
              "10 m East of the start",
              "15 m West of the start",
              "15 m East of the start"
            ],
            "correct": 3
          },
          {
            "q": "Statements: All cats are dogs. All dogs are birds.\nI. All cats are birds. II. Some birds are cats.",
            "options": [
              "Both follow",
              "Only I follows",
              "Only II follows",
              "Neither follows"
            ],
            "correct": 0
          },
          {
            "q": "Of 90 applicants, 10 have neither sales nor publishing experience, 65 have sales and 58 have publishing. How many have both?",
            "options": [
              "43",
              "33",
              "23",
              "35"
            ],
            "correct": 0
          },
          {
            "q": "Five friends P, Q, R, S, T stand in a row. P is at the extreme left, T at the extreme right, Q is immediately right of P and S is immediately left of T. Who stands in the middle?",
            "options": [
              "S",
              "R",
              "P",
              "Q"
            ],
            "correct": 1
          },
          {
            "q": "Ram is ₹2 short of buying a book and Shyam is ₹24 short. Each has some money, yet together they still cannot afford it. The price (whole ₹) is:",
            "options": [
              "₹24",
              "₹26",
              "₹27",
              "₹25"
            ],
            "correct": 3
          },
          {
            "q": "The angle between the hour and minute hands at 3:15 is:",
            "options": [
              "15°",
              "22.5°",
              "7.5°",
              "0°"
            ],
            "correct": 2
          }
        ]
      }
    ]
  }
];
