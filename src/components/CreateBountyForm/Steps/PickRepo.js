import { Select } from '@/components/Core';
import { FieldTooltip } from '@/components/FieldTooltip';
import { useRepositories } from '@/lib/swr';
import Link from 'next/link';

export const PickRepo = ({ repository, setRepository, setIssue }) => {
  const { repos, isLoading, error } = useRepositories();
  const renderSelect = (options) => (
    <div className="mb-8">
      <span className="text-muted mb-4">
        Repository
        <FieldTooltip
          icon="fa-question-circle"
          text="Pick a repository from ones you have given the PRHunter app access to. "
        />
      </span>

      <Select
        options={options}
        className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
        border={false}
        placeholder={'Pick repository'}
        value={
          repository
            ? {
                value: repository,
                label: repository.full_name,
              }
            : false
        }
        onChange={(e) => {
          setRepository(e.value);
          setIssue(null);
        }}
      />
    </div>
  );

  if (isLoading) return renderSelect([]);

  if (error)
    return (
      <>
        {renderSelect([])}
        <span className="text-danger mt-5">
          {error.message}: {error.info.message}
        </span>
      </>
    );

  if (repos.length === 0) {
    return (
      <>
        {renderSelect([])}
        <span className="mt-5">
          We couldn't find any repositories linked to PRHunter. Please make sure
          that the PRHunter app is installed,{' '}
          <Link href="/docs">click here for more details</Link>
        </span>
      </>
    );
  }

  const options = repos.map((repo) => ({
    value: repo,
    label: repo.full_name,
  }));
  return renderSelect(options);
};
