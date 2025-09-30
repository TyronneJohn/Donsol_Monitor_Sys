import { motion } from "framer-motion";

function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <motion.section
        className="flex flex-col items-center justify-center text-center px-4 pt-12 pb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Track. Monitor. Engage.
        </h1>
        <p className="text-lg md:text-xl text-slate-700 max-w-3xl mb-8">
          Welcome to the Donsol Budget Monitoring System. Stay informed about how the municipality’s funds are being used. Monitor ongoing projects, track budgets, and see real-time updates on Donsol’s development initiatives—all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View Projects
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Give Feedback
          </button>
          <button className="bg-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition">
            Learn More
          </button>
        </div>
      </motion.section>

      <motion.section
        className="px-4 py-16 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">How It Works</h2>
        <p className="text-slate-700 max-w-3xl mx-auto mb-8">
          Our platform makes it easy for residents and officials to track municipal budgets, monitor project progress, and provide feedback to ensure transparency and accountability.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <motion.div className="bg-white p-6 rounded-lg shadow-md flex-1" variants={cardVariant}>
            <h3 className="font-bold mb-2">1. View Projects</h3>
            <p className="text-slate-600">Check ongoing and completed municipal projects along with their budgets and timelines.</p>
          </motion.div>
          <motion.div className="bg-white p-6 rounded-lg shadow-md flex-1" variants={cardVariant}>
            <h3 className="font-bold mb-2">2. Track Budgets</h3>
            <p className="text-slate-600">Monitor how funds are allocated and spent in real time to ensure accountability.</p>
          </motion.div>
          <motion.div className="bg-white p-6 rounded-lg shadow-md flex-1" variants={cardVariant}>
            <h3 className="font-bold mb-2">3. Give Feedback</h3>
            <p className="text-slate-600">Participate by providing feedback, suggestions, or concerns to improve local governance.</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="px-4 py-16 bg-gray-50 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Goals of the Donsol Budget Monitoring System</h2>
        <p className="text-slate-700 max-w-3xl mx-auto mb-12">
          The system is designed to strengthen local governance and ensure every peso is used effectively. Our goals focus on promoting transparency, improving accountability, and encouraging active community participation.
        </p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          {[
            { title: "Transparency", text: "Provide clear and accessible information about municipal budgets, expenditures, and project progress to residents and stakeholders." },
            { title: "Accountability", text: "Ensure that local officials are responsible for managing public funds efficiently and completing projects on time." },
            { title: "Community Engagement", text: "Encourage citizens to actively participate by providing feedback, suggestions, and monitoring local development initiatives." },
            { title: "Efficiency", text: "Streamline budget tracking and project monitoring processes, reducing delays and improving resource allocation." },
            { title: "Informed Decision-Making", text: "Provide local officials and the community with accurate data to guide planning, budgeting, and development decisions." },
            { title: "Sustainable Development", text: "Support long-term community growth by ensuring that funds are allocated to projects that benefit residents and preserve Donsol’s resources." },
          ].map((goal, i) => (
            <motion.div key={i} className="bg-white p-6 rounded-lg shadow-md" variants={cardVariant}>
              <h3 className="font-bold text-xl mb-2">{goal.title}</h3>
              <p className="text-slate-600">{goal.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="px-4 py-16 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">General Services</h2>
        <p className="text-slate-700 max-w-3xl mx-auto mb-12">
          The Donsol Budget Monitoring System offers a range of services to help residents, officials, and stakeholders stay informed and actively participate in local governance.
        </p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          {[
            { title: "Project Tracking", text: "View ongoing and completed municipal projects, their timelines, and progress updates in real time." },
            { title: "Budget Monitoring", text: "Track the allocation and usage of public funds, ensuring transparency and responsible spending." },
            { title: "Feedback & Participation", text: "Provide suggestions, raise concerns, and actively participate in improving municipal programs and services." },
            { title: "Reports & Analytics", text: "Access detailed reports and analytics on budgets, expenditures, and project outcomes for informed decision-making." },
            { title: "Notifications & Updates", text: "Receive timely notifications on new projects, budget changes, and important municipal announcements." },
            { title: "Community Resources", text: "Access helpful guides, FAQs, and resources to better understand municipal budgeting and governance processes." },
          ].map((service, i) => (
            <motion.div key={i} className="bg-white p-6 rounded-lg shadow-md" variants={cardVariant}>
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-slate-600">{service.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}

export default Home;
