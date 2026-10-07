-- BestPickZone-only records in the existing portfolio database. No access for browser roles.
create table if not exists public.bpz_service_config (id text primary key, secret_hash text not null);
create table if not exists public.bpz_deal_subscriptions (
 id uuid primary key default gen_random_uuid(), email text not null check(length(email)<=254), topic text not null,
 target numeric check(target>0 and target<=100000), status text not null default 'pending_setup' check(status in ('pending_setup','pending_confirmation','active')),
 token_hash text unique not null, confirm_hash text unique not null, consent_version text not null,
 created_at timestamptz not null default now(), confirmed_at timestamptz, unique(email,topic)
);
create table if not exists public.bpz_deal_feedback (id bigint generated always as identity primary key, topic text not null, intent text not null, budget_band text not null, helpful boolean, created_at timestamptz not null default now());
create table if not exists public.bpz_deal_rate (key text primary key, count integer not null default 1, expires_at timestamptz not null);
create table if not exists public.bpz_deal_deliveries (id text primary key, subscription_id uuid not null references public.bpz_deal_subscriptions(id) on delete cascade, created_at timestamptz not null default now(), status text not null default 'reserved');
alter table public.bpz_service_config enable row level security;
alter table public.bpz_deal_subscriptions enable row level security;
alter table public.bpz_deal_feedback enable row level security;
alter table public.bpz_deal_rate enable row level security;
alter table public.bpz_deal_deliveries enable row level security;
revoke all on public.bpz_service_config,public.bpz_deal_subscriptions,public.bpz_deal_feedback,public.bpz_deal_rate,public.bpz_deal_deliveries from anon,authenticated;
grant all on public.bpz_service_config,public.bpz_deal_subscriptions,public.bpz_deal_feedback,public.bpz_deal_rate,public.bpz_deal_deliveries to service_role;
grant usage,select on sequence public.bpz_deal_feedback_id_seq to service_role;
create or replace function public.bpz_take_rate(p_key text,p_limit integer) returns boolean language plpgsql security invoker set search_path=public as $$
declare n integer;
begin
 insert into bpz_deal_rate(key,count,expires_at) values(p_key,1,now()+interval '1 hour')
 on conflict(key) do update set count=case when bpz_deal_rate.expires_at<now() then 1 else bpz_deal_rate.count+1 end, expires_at=case when bpz_deal_rate.expires_at<now() then now()+interval '1 hour' else bpz_deal_rate.expires_at end returning count into n;
 return n<=p_limit;
end $$;
revoke all on function public.bpz_take_rate(text,integer) from public,anon,authenticated;
grant execute on function public.bpz_take_rate(text,integer) to service_role;
