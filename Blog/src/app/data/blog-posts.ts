import { BlogPost } from "../models/blog-post.model"
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    route: 'useReducer_hook_better_than_useState',
    title: '"useReducer" vs "useState"',
    summary: 'Structured approach to deal with multiple state transitions.'
  },
  {
    id: 2,
    route: 'understanding_closures',
    title: 'Understanding Closures',
    summary: 'A closure is a function that retains access to its lexical scope even when the function is executed outside of that scope.',
  },
  {
    id: 3,
    route: 'architecture_api_leadership',
    title: 'Architecture & Leadership',
    summary: 'Some thoughts on Architecture, API Integraion and Leadership',
  },
  {
    id: 4,
    route: 'vulnerability_prevention_in_react',
    title: 'Vulnerability prevention in React',
    summary: '10 points to know about vulnerability prevention in React app',
  },
  {
    id: 5,
    route: 'ecommerce_product_management',
    title: 'Ecommerce product management',
    summary: 'E-commerce product management involves overseeing the lifecycle of products sold.',
  },
  {
    id: 6,
    route: 'useRef_uses_in_React',
    title: '"useRef uses in React',
    summary: 'useRef hook is a versatile tool prevents re-renders'
  },
  {
    id: 7,
    route: 'digital_transformation',
    title: 'Digital transformation',
    summary: 'Technology to change how an organization operates fundamentally.',
  }
];
export const blogPostDetails = {
  'useReducer_hook_better_than_useState': {
      heading: 'useReducer vs useState',
      content: [        
        '<p>The <strong>useReducer</strong> hook is a powerful alternative to <strong>useState</strong> for managing state in functional components. While <strong>useState</strong> is ideal for handling simple, local state changes, <strong>useReducer</strong> is better suited for scenarios involving more complex state logic or multiple related state transitions. It offers a more structured approach, similar to Redux-style state management, within a component.</p>',
        '<h2>When to use useReducer:</h2>', 
        '<p>When state logic becomes complex and difficult to manage with useState. The <strong>useReducer</strong> hook is a React function that manages complex state logic within functional components. <br />It offers a structured approach to state management, particularly when dealing with multiple state transitions or asynchronous updates.<br />The <strong>useReducer</strong> hook requires 2 arguments:</p>',
        '<ul><li><h3>reducer</h3> - A function that specifies how the state should be updated based on actions. <br /> The reducer function is a pure function that defines how the state changes in response to dispatched actions. <br /> It must be pure, meaning it does not have side effects or modify its arguments. Take the current state and action as arguments, return the next state. <br /> It takes two arguments: <ol><li><h4>state</h4> - The current state.</li><li><h4>action</h4> - An object describing the update to be performed. It usually includes a type property and optionally a payload containing additional data.</li></ol></li>',
        '<ul><li><h3>initialState</h3> - The initial value of the state. It can be a simple value or an object.</li></ul>',
        '<h2>useReducer return values:</h2>',
        '<ul><li><h3>state</h3> - The current state value.</li><li><h3>dispatch</h3> - A function used to send actions to the reducer. Calling dispatch triggers a state update based on the provided action.</li></ul>',
        '<h3>Code: </h3>',
      ]
  },
  'understanding_closures': {
    heading: 'Understanding Closures',
    content: [
      '<ul><li><h2>Lexical Scoping:</h2><p>Closures rely on <strong>lexical scoping</strong>, where the scope of a variable is determined by where its written in the code.</p></li><li><h2>Inner Functions:</h2><p>A closure is created when an inner function is defined within an outer function.</p></li><li><h2>Access to Outer Scope:</h2><p>The inner function has access to the outer function"s variables, even after the outer function has returned.</p></li><li><h2>Private Variables:</h2><p>Closures are often used to emulate private variables in JavaScript, as the outer function"s variables are not directly accessible from outside.</p><li><h2>State Maintenance:</h2><p>They can maintain state between function calls, making them useful for creating counters or other stateful behaviors.</p></li></ul>',
      '<h2>Common Uses of Closures:</h2>',
      '<ol><li><h3>Callbacks</h3> - They are used in callbacks to access variables from the outer scope.</li><li><h3>Data Hiding</h3> - Closures enable the creation of private variables, enhancing data security.</li><li><h3>Emulating Private Methods</h3> - They can be used to create private methods within objects.</li><li><h3>Creating Iterators</h3> - Closures can be used to create functions that act as iterators.</li></ol>',
      '<h2>Potential Pitfalls:</h2>',
      '<ul><li><h3>Memory Leaks:</h3> - If closures capture variables that are no longer needed, they can cause memory leaks.</li></ul>'
    ]
  },
  'architecture_api_leadership': {
    heading: 'Full Stack [Node] Topic : Some thoughts on Architecture, API Integraion and Leadership',
    content: [
      '<h2>Architecture & Design:</h2>',
      '<h3>How would you design a scalable Node.js application?</h3>',
      '<ul><li>Use clustering or horizontal scaling (e.g., PM2, Docker)</li><li>Load balancers (Nginx/ELB)</li><li>Async non-blocking logic</li><li>Stateless services with centralized cache/storage (e.g., Redis)</li><li>Modular structure + service separation (monolith/microservices)</li></ul>',
      '<h3>What design patterns have you used in your Node.js projects?</h3>',
      '<p>Module, Singleton, Factory, Observer, Strategy, Middleware, Repository, Decorator</p>',
      '<h3>How do you manage configuration across environments (dev, staging, production)?</h3>',
      '<ul><li>Use .env files and dotenv package</li><li>Environment variables in CI/CD pipelines</li><li>Config files per environment</li><li>Avoid hardcoding secrets (use Vault, AWS Secrets Manager, etc.)</li></ul>',
      '<h3>What’s your approach to structuring a large Node.js project?</h3>',
      '<h4>Typical structure:</h4>',
      '<pre>/controllers<br />/routes<br />/models<br />/middlewares<br />/services<br />/utils<br />/config<br />/tests<br />Use layers (controller → service → DAO) to separate concerns.</pre>',
      '<h3>How do you implement logging and monitoring in Node applications?</h3>',
      '<ul><li>Use winston, pino, or bunyan for logging</li><li>Use tools like Prometheus + Grafana, or Datadog, Sentry for monitoring</li><li>Log levels (info, warn, error, debug)</li><li>Request logging middleware (e.g., morgan)</li></ul>',
      '<h3>What tools do you use for profiling and performance tuning in Node.js?</h3>',
      '<ul><li>--inspect with Chrome DevTools</li><li>clinic.js for advanced profiling</li><li>heapdump, memwatch for memory leaks</li><li>APM tools: New Relic, AppDynamics</li></ul>',
      '<h2>API & Integration</h2>',
      '<h3>How do you handle versioning in RESTful APIs?</h3>',
      '<ul><li>URI versioning: /api/v1/users</li><li>Header versioning: Accept: application/vnd.myapp.v1+json</li><li>Avoid breaking changes; deprecate gradually</li></ul>',
      '<h3>What are best practices for securing APIs in Node.js?</h3>',
      '<ul><li>Input validation (Joi, express-validator)</li><li>Use HTTPS</li><li>Rate limiting (express-rate-limit)</li><li>Authentication (OAuth, JWT)</li><li>Helmet.js to set security headers</li><li>Sanitize input to prevent XSS/SQLi</li></ul>',
      '<h3>How do you implement rate limiting and throttling?</h3>',
      '<p>Use libraries like express-rate-limit or Redis-backed solutions like rate-limiter-flexible:</p>',
      "<pre>const rateLimit = require('express-rate-limit');<br />app.use(rateLimit({ windowMs: 1 * 60 * 1000, max: 100 }));</pre>",
      '<h3>What are some tools you use for API testing?</h3>',
      '<ul><li>Postman</li><li>Swagger/OpenAPI + Swagger UI</li><li>Jest + Supertest for automated tests</li><li>Newman for CI testing with Postman collections</li></ul>',
      '<h3>How do you handle pagination, filtering, and sorting in APIs?</h3>',
      '<h4>Standard query params:</h4>',
      '<pre>GET /users?page=2&limit=10&sort=name&filter[role]=admin</pre>',
      '<p>Implement at DB layer with Mongo’s .skip() and .limit() or SQL OFFSET/LIMIT.</p>',
      '<h2>Leadership & Collaboration</h2>',
      '<h3>How do you mentor junior developers on your team?</h3>',
      '<ul><li>Regular 1-on-1s</li><li>Pair programming</li><li>Code reviews with constructive feedback</li><li>Encourage asking questions and learning through small features</li></ul>',
      '<h3>How do you prioritize technical debt and feature delivery?</h3>',
      '<ul><li>Maintain a tech debt backlog</li><li>Align debt pay-down with sprint planning</li><li>Use metrics like "code churn" and bug frequency</li><li>Advocate for a % of sprint time for tech improvements</li></ul>',
      '<h3>How do you ensure code quality and consistency across your team?</h3>',
      '<ul><li>Linting (eslint)</li><li>Pre-commit hooks (husky, lint-staged)</li><li>Code reviews</li><li>Shared coding guidelines</li><li>Automated tests in CI</li></ul>',		
      '<h3>What’s your approach to conducting code reviews?</h3>',
      '<ul><li>Focus on readability, correctness, and scalability</li><li>Avoid nitpicking; use linters for formatting</li><li>Encourage comments and alternatives</li><li>Teach, don’t block unless necessary</li></ul>',		
      '<h3>How do you handle conflict within a development team?</h3>',
      '<ul><li>Listen actively to both sides</li><li>Focus on facts, not emotion</li><li>Facilitate collaboration over blame</li><li>Escalate only when necessary</li><li>Promote psychological safety</li></ul>',
    ]
  },
  'vulnerability_prevention_in_react': {
    heading: 'Vulnerability prevention in React app',
    content: [
      '<h2>10 points to know about vulnerability prevention in React app:</h2>',
      '<h3>Protect Against Cross-Site Scripting (XSS)</h3>',
      '<ul><li>React escapes content by default (JSX output is sanitized).</li><li>Avoid using dangerously SetInnerHTML unless absolutely necessary, and always sanitize the input if you do.</li><li>Use libraries like DOMPurify if you must render raw HTML:<pre>import DOMPurify from "dompurify";<br />const safeHtml = DOMPurify.sanitize(dirtyHtml);</pre></li></ul>',
      '<h3>Secure API Communications</h3>',
      '<ul><li>Always use HTTPS.</li><li>Implement authentication (e.g., OAuth, JWT tokens) and authorization properly.</li><li>Protect against CSRF attacks if your app interacts with cookies — use SameSite cookies or CSRF tokens.</li></ul>',
      '<h3>Prevent Code Injection</h3>',
      '<ul><li>Never trust client-side inputs.</li><li>Validate and sanitize all user inputs both on client and server sides.</li><li>Example: validate form fields before sending to backend.</li></ul>',
      '<h3>Handle Dependencies Carefully</h3>',
      '<ul><li>Keep dependencies updated (React and npm packages).</li><li>Regularly audit your packages:<pre>npm audit fix</pre></li><li>Use tools like Snyk, Dependabot, or npm audit.</li></ul>',
      '<ul><li>Don’t expose sensitive information in error messages.</li><li>Use generic error messages for users and detailed logs for the server side only.</li><li>Catch errors with Error Boundaries in React:<pre>class ErrorBoundary extends React.Component {<br /> state = { hasError: false }; <br /> static getDerivedStateFromError(error) { <br /> return { hasError: true };<br />}<br />componentDidCatch(error, errorInfo) {<br /> // Log error to a service<br />}<br />render() {<br /> if (this.state.hasError) {<br />  return <h4>Something went wrong.</h4>;<br /> }<br /> return this.props.children;<br /> }<br />}</pre></li></ul>',
      '<h3>Content Security Policy (CSP)</h3>',
      '<ul><li>Add a CSP header in your web server or meta tags to restrict sources of scripts, images, etc.<pre>&lt;meta http-equiv="Content-Security-Policy" content="default-src `self`; script-src `self`;"&gt;</pre></li></ul>',
      '<h3>Authentication Best Practices</h3>',
      '<ul><li>Store tokens securely (e.g., HttpOnly cookies are safer than localStorage).</li><li>Implement multi-factor authentication (MFA) if possible.</li><li>Rotate secrets and tokens periodically.</li></ul>',
      '<h3>Limit Client-Side Data Exposure</h3>',
      '<ul><li>Never store sensitive information (like API keys, secrets) in the frontend code.</li><li>Use environment variables carefully (only expose what is necessary with REACT_APP_ prefix).</li></ul>',
      '<h3>Protect Routing</h3>',
      '<ul><li>If you use client-side routing (like React Router), always check user roles/permissions when accessing protected routes.<pre>&lt;Route path="/admin" element={isAdmin ? <AdminPage /> : <Navigate to="/login" />} /&gt;</pre></li></ul>',
      '<h3>Session Management</h3>',
      '<ul><li>Implement session timeout and re-authentication mechanisms.</li><li>Logout users properly (clear tokens, reset app state).</li></ul>',
    ]
  },
  'ecommerce_product_management': {
    heading: 'Ecommerce product management',
    content: [
      '<p>E-commerce product management involves overseeing the lifecycle of products sold through online platforms—from planning and listing to inventory tracking and optimization. Here are the <strong>essential steps</strong> in e-commerce product management:</p>',
      '<h2>Product Planning</h2>',
      '<ul><li><h3>Market research</h3>: Identify customer needs, trends, and competitor offerings.</li><li><h3>Product selection</h3>: Choose which products to sell based on demand, margin, and logistics.</li><li><h3>Supplier coordination</h3>: Source reliable suppliers or plan for in-house production.</li></ul>',
      '<h2>Product Data Management</h2>',
      '<ul><li><h3>Create product records</h3>: Include names, SKUs, pricing, descriptions, and specs.</li><li><h3>Standardize attributes</h3>: Size, color, material, etc., should follow a consistent structure.</li><li><h3>Upload media</h3>: High-quality images, videos, and 360° views.</li></ul>',
      '<h2>Product Listing</h2>','<ul><li><h3>Write compelling descriptions</h3>: SEO-friendly, benefits-focused, and clear.</li><li><h3>Categorize products</h3>: Use logical categories and tags for easy navigation.</li><li><h3>Optimize for search</h3>: Use relevant keywords in titles, descriptions, and metadata.</li></ul>',
      '<h2>Pricing Management</h2>',
      '<ul><li><h3>Set pricing strategies</h3>: Competitive pricing, psychological pricing, dynamic pricing, etc.</li><li><h3>Monitor competitors</h3>: Adjust prices in response to market changes.</li><li><h3>Handle discounts/promotions</h3>: Time-bound deals, coupon codes, bundles.</li></ul>',
      '<h2>Inventory Management</h2>','<ul><li><h3>Track stock levels</h3>: Real-time syncing with warehouse or dropshipping systems.</li><li><h3>Reorder thresholds</h3>: Automate reorder points to avoid stockouts.</li><li><h3>Multi-channel sync</h3>: Ensure consistent inventory across all platforms (e.g., Amazon, Shopify, Etsy).</li></ul>',
      '<h2>Order & Fulfillment Integration</h2>','<ul><li><h3>Automate order processing</h3>: From order capture to shipping.</li><li><h3>Coordinate logistics</h3>: Shipping, delivery, returns, and exchanges.</li><li><h3>Communicate with customers</h3>: Real-time updates and tracking.</li></ul>',
      '<h2>Product Performance Monitoring</h2>',
      '<ul><li><h3>Track KPIs</h3>: Conversion rate, bounce rate, cart abandonment, product views.</li><li><h3>A/B testing</h3>: Test variations in titles, images, or prices.</li><li><h3>Use analytics tools</h3>: Google Analytics, built-in eCommerce dashboards.</li></ul>',
      '<h2>Customer Feedback & Improvement</h2>','<ul><li><h3>Collect reviews/ratings</h3>: Monitor and respond to feedback.</li><li><h3>Improve based on feedback</h3>: Adjust descriptions, fix quality issues, improve delivery times.</li><li><h3>Enable Q&A sections</h3>: Allow potential customers to ask product-related questions.</li></ul>',
      '<h2>Product Lifecycle Management</h2>','<ul><li><h3>Launch new products</h3>: Plan and execute product launches.</li><li><h3>Phase out slow movers</h3>: Discount or delist products that underperform.</li><li><h3>Manage seasonal items</h3>: Schedule availability and promotions around seasonality.</li></ul>',
      '<h2>Compliance & Legal</h2>','<ul><li><h3>Ensure regulatory compliance</h3>: Product safety, certifications, and consumer rights.</li><li><h3>Platform policies</h3>: Adhere to the rules of each marketplace (Amazon, eBay, etc.).</li></ul>',
    ]
  },
  'useRef_uses_in_React': {
    heading: 'The useRef hook is a versatile tool primarily used for working with refs.',
    content: [
    	'<p>In React, the useRef hook is a versatile tool primarily used for working with refs, or references to DOM elements or persistent values. Here’s a quick breakdown of its uses when it comes to ref context:</p>',
    	'<h2>useRef uses in React</h2>',
      '<h3>DOM Access</h3>',
    	'<ul><li>You can use useRef to get a reference to a DOM element so you can interact with it directly—like focusing an input, measuring size, or triggering animations.<pre>const inputRef = useRef(null);<br />useEffect(() => {<br />  inputRef.current.focus();<br />}, []);<br />return &lt;input ref={inputRef} /&gt;;</li></ul>',
      '<h3>Persisting Values Without Re-render</h3>',
    	'<ul><li>useRef is also handy for storing mutable values that don’t cause re-renders when updated. This is especially useful for timers, flags, or previous state values.<pre>const renderCount = useRef(0);<br />useEffect(() => {<br />  renderCount.current += 1;<br />});',
    	'<h3>Sharing Refs Between Components</h3>',
    	'<ul><li>In some advanced patterns, you might pass a ref to a child component using forwardRef. This lets you control or observe a child component’s DOM node from the parent.<pre>const CustomInput = forwardRef((props, ref) => {<br />  return &lt;input ref={ref} {...props} /&gt;;<br />});<br />const App = () => {<br />  const inputRef = useRef(null);<br />  return &lt;CustomInput ref={inputRef} /&gt;;<br />};',
      '<h3>Storing Contextual Data</h3>',
    	'<ul><li>Though useRef isn’t a replacement for React Context, it can be useful for keeping around contextual references that don’t need to trigger updates—like a WebSocket instance or scroll position.<pre>&lt;div ref={observerRef}&gt;<br />  {onScrollVisible && &lt;LazyComponent /&gt;}<br />&lt;/div&gt;</li></ul>'
    ]
  },
  'digital_transformation': {
    heading: 'Technology to change how an organization operates fundamentally.',
    content: [
    	"<p>Digital transformation is the process of using technology to fundamentally change how an organization operates, creating new or modified products, services, and operations to meet evolving market needs. It's not just about adopting new technologies; it's about rethinking how business is done, engaging with customers, and creating value.</p>",
    	'<h2>Key Aspects of Digital Transformation:</h2>',
      '<h3>Technology Adoption:</h3>',
    	'<ul><li>Incorporating technologies like cloud computing, AI, big data analytics, and mobile solutions.</li></ul>',
      '<h3>Business Process Reimagining:</h3>',
    	'<ul><li>Redesigning existing processes and creating new ones to improve efficiency and customer experience.</li><ul>',
    	'<h3>Customer-Centricity:</h3>',
    	'<ul><li>Focusing on understanding and meeting customer needs through personalized experiences and digital channels.</li></ul>',
      '<h3>Cultural Shift:</h3>',
    	'<ul><li>Requiring organizations to adapt their culture to embrace innovation, experimentation, and a willingness to embrace change.</li></ul>',
      '<h3>Continuous Improvement:</h3>',
    	'<ul><li>A mindset of ongoing innovation and adaptation to stay competitive in the digital age.</li></ul>',
      '<h3>Examples of Digital Transformation:</h3>',
      '<ul><li>A company using AI to personalize customer recommendations.</li><li>An organization implementing a cloud-based CRM system to improve customer relationship management.</li><li>A retailer using data analytics to optimize inventory and pricing.</li><li>A government agency using online portals to streamline services for citizens.</li></ul>',
      '<h2>Benefits of Digital Transformation:</h2>',
      '<h3>Increased Efficiency:</h3>',
      '<ul><li>Automating processes and streamlining workflows can lead to significant cost savings and improved productivity.</li></ul>',
      '<h3>Enhanced Customer Experience:</h3>',
      '<ul><li>Personalized interactions, online channels, and self-service options can improve customer satisfaction and loyalty.</li></ul>',
      '<h3>New Revenue Streams:</h3>',
      '<ul><li>Digital transformation can enable companies to create new products and services, enter new markets, and explore new business models.</li></ul>',
      '<h3>Improved Agility:</h3>',
      '<ul><li>Digital technologies can help organizations become more adaptable to changing market conditions and customer demands.</li></ul>',
      '<h3>Data-Driven Decision Making:</h3>',
      '<ul><li>Leveraging data analytics can provide valuable insights for better decision-making and strategic planning.</li></ul>',
      '<h2>Digital Transformation Startup Pathway</h2>',
      '<h3>Problem Identification & Market Research</h3>',
      '<ul><li>Identify industry pain points (e.g., inefficient legacy systems, lack of data visibility, slow decision-making).</li><li>Target verticals like healthcare, finance, logistics, manufacturing, or SMBs.</li><li>Research competitors and gaps in current solutions.</li></ul>',
      '<h3>Define Your Niche, Focus on a specific area like:</h3>',
      '<ul><li>Cloud migration</li><li>Workflow automation (e.g., RPA)</li><li>Data analytics & BI</li><li>AI/ML for decision-making</li><li>Digital twins / IoT integrations</li><li>CRM/ERP modernization</li></ul>',
      '<h3>Validate the Idea</h3>',
      '<ul><li>Interview potential customers.</li><li>Develop a minimum viable product (MVP) or prototype.</li><li>Gather feedback to refine your offering.</li></ul>',
      '<h3>Assemble a Core Team, Include skills in:</h3>',
      '<ul><li>Software engineering / DevOps</li><li>Business process consulting</li><li>UX/UI design</li><li>Sales & customer success</li></ul>',
      '<h3>Build the Product</h3>',
      '<ul><li>Use agile methodologies.</li><li>Integrate scalable cloud infrastructure.</li><li>Focus on data security and compliance from the start.</li></ul>',
      '<h3>Pilot Program</h3>',
      '<ul><li>Offer free or discounted pilots to key early adopters.</li><li>Measure KPIs like cost savings, speed improvements, or ROI.</li><li>Iterate based on user feedback.</li></ul>',
      '<h3>Develop a Go-To-Market Strategy</h3>',
      '<ul><li>Choose between direct sales, channel partners, or a SaaS model.</li><li>Craft messaging around business outcomes, not just tech.</li><li>Build credibility with case studies and white papers.</li></ul>',
      '<h3>Fundraising (Optional), Bootstrap if possible, or pursue:</h3>',
      '<ul><li>Angel investors</li><li>Seed VCs with a focus on enterprise SaaS or B2B</li><li>Government grants for innovation</li></ul>',
      '<h3>Scale Operations</h3>',
      '<ul><li>Automate deployments and onboarding.</li><li>Hire support and customer success teams.</li><li>Focus on recurring revenue and retention metrics.</li></ul>',
      '<h3>Evolve and Expand</h3>',
      '<ul><li>Add new features/modules.</li><li>Expand to new verticals or regions.</li><li>Consider partnerships with larger tech firms.</li></ul>',
    ]
  }
};
export const closureCode = `
      function createCounter() {
        let count = 0; // Private variable
        return {
          increment: function() {
            count++;
            return count;
          },
          decrement: function() {
            count--;
            return count;
          },
          getCount: function() {
            return count;
          }
        };
      }

      const counter = createCounter();
      console.log(counter.increment()); // Output: 1
      console.log(counter.increment()); // Output: 2
      console.log(counter.getCount());  // Output: 2
      console.log(counter.count);       // Output: undefined

      function memoizedAdd(multiplier) {
        let cache = {};
        return function(n) {
          if (cache[n]) {
            console.log("Fetching from cache");
            return cache[n];
          }
          console.log("Calculating result");
          cache[n] = n * multiplier;
          return cache[n];
        };
      }

      const add = memoizedAdd(2);
      console.log(add(10));
      console.log(add(10));
      console.log(add(12));

      const sum = function(a) {
        return function(b) {
          if(b) {
            return sum(a + b);
          }
          return a;
        }
      }
      console.log(sum(10)(5)(6)());
    `;
