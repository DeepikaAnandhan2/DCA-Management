import {
  User,
  Bell,
  Shield,
  Mail
} from "lucide-react";

function Row({
  title,
  subtitle,
  value,
}: {
  title: string;
  subtitle: string;
  value: boolean;
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-gray-900">{title}</p>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>

        <button
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
            value ? "bg-purple-700" : "bg-gray-300"
          }`}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
              value ? "translate-x-5" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      <div className="my-4 h-px bg-gray-200" />
    </>
  );
}

export default function Settings() {
  return (
    <div className="p-6 md:p-8">
      {/* Page Header */}
      <h1 className="text-2xl font-bold text-gray-900">
        Settings
      </h1>
      <p className="mb-6 text-gray-500">
        Manage your account and system preferences
      </p>

      {/* Profile */}
      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6">
        <div className="mb-4 flex items-center gap-2">
          <User className="text-purple-700" size={20} />
          <h2 className="text-lg font-semibold">
            Profile Information
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            ["Full Name", "Priya Sharma", false],
            ["Email", "priya.sharma@fedex.com", false],
            ["Role", "FedEx Supervisor", true],
            ["Region", "Chennai, Tamil Nadu", true],
          ].map(([label, value, disabled]) => (
            <div key={label}>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                {label}
              </label>
              <input
                disabled={disabled as boolean}
                value={value as string}
                className={`w-full rounded-lg border px-3 py-2 text-sm ${
                  disabled
                    ? "bg-gray-100 text-gray-500"
                    : "border-gray-300 focus:border-purple-600 focus:outline-none"
                }`}
              />
            </div>
          ))}
        </div>

        <button className="mt-4 rounded-lg bg-purple-800 px-6 py-2 text-sm font-medium text-white hover:bg-purple-900">
          Save Changes
        </button>
      </div>

      {/* Notifications */}
      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6">
        <div className="mb-4 flex items-center gap-2">
          <Bell className="text-purple-700" size={20} />
          <h2 className="text-lg font-semibold">
            Notification Preferences
          </h2>
        </div>

        <Row
          title="AI Alerts"
          subtitle="Alerts for AI-tagged high priority cases"
          value
        />
        <Row
          title="Daily Summary"
          subtitle="Receive daily case summary reports"
          value
        />
        <Row
          title="DCA Updates"
          subtitle="Notifications for DCA case updates"
          value={false}
        />
      </div>

      {/* Security */}
      <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6">
        <div className="mb-4 flex items-center gap-2">
          <Shield className="text-purple-700" size={20} />
          <h2 className="text-lg font-semibold">
            Security
          </h2>
        </div>

        <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50">
          Change Password
        </button>

        <p className="mt-2 text-sm text-gray-500">
          Last password change: 30 days ago
        </p>
      </div>

      {/* Email */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="mb-4 flex items-center gap-2">
          <Mail className="text-purple-700" size={20} />
          <h2 className="text-lg font-semibold">
            Email Settings
          </h2>
        </div>

        <Row
          title="Marketing Emails"
          subtitle="Receive product updates and news"
          value={false}
        />
        <Row
          title="System Emails"
          subtitle="Critical system notifications"
          value
        />
      </div>
    </div>
  );
}
